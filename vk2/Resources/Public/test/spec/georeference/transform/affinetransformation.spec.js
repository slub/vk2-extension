/**
 * Created by mendt on 03.09.15.
 */
/**
 * Created by mendt on 15.08.15.
 */
goog.provide('vk2.test.georeference.transform.Affine');

goog.require('vk2.georeference.transform.Affine');
goog.require('vk2.georeference.transform.GCP');

describe('vk2.georeference.transform.Affine', function() {

    var gcps;
    beforeEach(function () {
        gcps = [
            new vk2.georeference.transform.GCP(7701,7146,8.1666669845581,48.79999923706),
            new vk2.georeference.transform.GCP(7695,742,8.1666669845581,48.900001525879),
            new vk2.georeference.transform.GCP(696,722,7.9999995231628,48.900001525879),
            new vk2.georeference.transform.GCP(694,7127,7.9999995231628,48.79999923706)
        ];
    });

    describe('Test correct calculation of the affine transformation matrix', function () {

        it('Create affine transformation for set of GCPs', function() {

            var affineTransformation = vk2.georeference.transform.Affine.geoTransfromFromGCPs(gcps);

            // for debugging
            console.log(affineTransformation);

            expect(typeof affineTransformation === 'object').toBe(true);
            expect(affineTransformation[0]).toBe(7.983488094879308);
            expect(affineTransformation[1]).toBe(0.000023799450509557777);
            expect(affineTransformation[2]).toBe(-7.430916239550339e-9);
            expect(affineTransformation[3]).toBe(48.91124884894153);
            expect(affineTransformation[4]).toBe(4.347795087137715e-8);
            expect(affineTransformation[5]).toBe(-0.0000156143922457537);
        });
    });
    
    describe('Test correct calculation of th e inverse affine transformation matrix', function() {
    	
    	it('Create inverse of affine transformation', function() {
    		
    		var affineTransformation = vk2.georeference.transform.Affine.geoTransfromFromGCPs(gcps),
    			inverseAffineTransformation = vk2.georeference.transform.Affine.inverseGeoTransformation(affineTransformation);
    		
    		console.log(inverseAffineTransformation);
    	});
    });
    
    describe('Transform coordinate tuple', function() {
    	
    	it('Transform simple coordinate tuple', function() {
    		var affineTransformation = vk2.georeference.transform.Affine.geoTransfromFromGCPs(gcps),
    			coordinate = vk2.georeference.transform.Affine.transformCoordinate([7701,7146], affineTransformation);
    		
    		console.log(coordinate);
    		
    		expect(Math.ceil(coordinate[0])).toBe(9);
    		expect(Math.ceil(coordinate[1])).toBe(49);
    	});	
    });

});