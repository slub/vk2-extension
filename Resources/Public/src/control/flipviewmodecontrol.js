/**
 * Created by mendt on 04.03.16.
 */
goog.provide('vk2.control.FlipViewMode');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.events');

/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object=} opt_options Control options.
 */
vk2.control.FlipViewMode = function(opt_options) {

    var options = opt_options || {};

    var anchor = document.createElement('a');
    anchor.href = '#flip-view-mode';
    anchor.innerHTML = vk2.utils.is3DMode() && vk2.utils.getOL3D().getEnabled() ? '2D' : '3D';
    anchor.className = vk2.utils.is3DMode() && vk2.utils.getOL3D().getEnabled() ? 'ol-has-tooltip three-d' :
        'ol-has-tooltip two-d';

    var tooltip = goog.dom.createDom('span', {'role':'tooltip','innerHTML':'Switch between 2d and 3d'})
    goog.dom.appendChild(anchor, tooltip);

    var activate3d_ = function() {
            if (vk2.utils.is3DMode()) {
                var ol3d = vk2.utils.getOL3D(),
                    scene = ol3d.getCesiumScene(),
                    camera = scene.camera,
                    bottom = olcs.core.pickBottomPoint(scene),
                    angle = Cesium.Math.toRadians(50),
                    transform = Cesium.Matrix4.fromTranslation(bottom);

                // 2d -> 3d transition
                ol3d.setEnabled(true);

                // take care that every time the view is reset when zoom out
                olcs.core.rotateAroundAxis(camera, -angle, camera.right, transform, {
                    'duration': 500,
                });
            }
        },
        deactivate3d_ = function() {
            if (vk2.utils.is3DMode()) {
                var ol3d = vk2.utils.getOL3D(),
                     scene = ol3d.getCesiumScene(),
                    camera = scene.camera,
                    bottom = olcs.core.pickBottomPoint(scene),
                    angle = Cesium.Math.toRadians(50),
                    transform = Cesium.Matrix4.fromTranslation(bottom),
                    angle = olcs.core.computeAngleToZenith(scene, bottom);

                if (!ol3d.getEnabled())
                    return;

                // 3d -> 2d transition
                olcs.core.rotateAroundAxis(camera, -angle, camera.right, transform, {
                    callback: function() {
                        ol3d.setEnabled(false);
                        var view = ol3d.getOlMap().getView();
                        var resolution = view.getResolution();
                        var rotation = view.getRotation();

                        view.setResolution(view.constrainResolution(resolution));
                        view.setRotation(view.constrainRotation(rotation));
                    }
                });
            }
        },
        handler_ = function(event) {
            event.preventDefault();

            if (goog.dom.classlist.contains(anchor, 'three-d')) {
                goog.dom.classlist.addRemove(anchor, 'three-d', 'two-d');
                anchor.innerHTML = '2D';
                deactivate3d_();
            } else {
                goog.dom.classlist.addRemove(anchor, 'two-d', 'three-d');
                anchor.innerHTML = '3D';
                activate3d_();
            };
        };

    if (goog.DEBUG) {
        window['activate'] = activate3d_;
        window['deactivate'] = deactivate3d_;
    }

    goog.events.listen(anchor, 'click', handler_, undefined, this);
    goog.events.listen(anchor, 'touchstart', handler_, undefined, this);

    var element = document.createElement('div');
    element.className = 'flip-view-mode ol-unselectable';
    element.appendChild(anchor);

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });

};
ol.inherits(vk2.control.FlipViewMode, ol.control.Control);