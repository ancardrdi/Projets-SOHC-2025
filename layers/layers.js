ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([348464.171937, 1350095.464998, 773491.166872, 1570479.832742]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LIMITESCOMMUNESSOHC_1 = new ol.format.GeoJSON();
var features_LIMITESCOMMUNESSOHC_1 = format_LIMITESCOMMUNESSOHC_1.readFeatures(json_LIMITESCOMMUNESSOHC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_LIMITESCOMMUNESSOHC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCOMMUNESSOHC_1.addFeatures(features_LIMITESCOMMUNESSOHC_1);
var lyr_LIMITESCOMMUNESSOHC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESCOMMUNESSOHC_1, 
                style: style_LIMITESCOMMUNESSOHC_1,
                popuplayertitle: 'LIMITES COMMUNES SOHC',
                interactive: true,
                title: '<img src="styles/legend/LIMITESCOMMUNESSOHC_1.png" /> LIMITES COMMUNES SOHC'
            });
var format_COMMUNESCOUVERTES_2 = new ol.format.GeoJSON();
var features_COMMUNESCOUVERTES_2 = format_COMMUNESCOUVERTES_2.readFeatures(json_COMMUNESCOUVERTES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_COMMUNESCOUVERTES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESCOUVERTES_2.addFeatures(features_COMMUNESCOUVERTES_2);
var lyr_COMMUNESCOUVERTES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNESCOUVERTES_2, 
                style: style_COMMUNESCOUVERTES_2,
                popuplayertitle: 'COMMUNES COUVERTES',
                interactive: true,
                title: '<img src="styles/legend/COMMUNESCOUVERTES_2.png" /> COMMUNES COUVERTES'
            });
var format_DEKKILSOUF_3 = new ol.format.GeoJSON();
var features_DEKKILSOUF_3 = format_DEKKILSOUF_3.readFeatures(json_DEKKILSOUF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_DEKKILSOUF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEKKILSOUF_3.addFeatures(features_DEKKILSOUF_3);
var lyr_DEKKILSOUF_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEKKILSOUF_3, 
                style: style_DEKKILSOUF_3,
                popuplayertitle: 'DEKKIL SOUF',
                interactive: true,
                title: '<img src="styles/legend/DEKKILSOUF_3.png" /> DEKKIL SOUF'
            });
var format_DOUNDALSOUF_4 = new ol.format.GeoJSON();
var features_DOUNDALSOUF_4 = format_DOUNDALSOUF_4.readFeatures(json_DOUNDALSOUF_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_DOUNDALSOUF_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOUNDALSOUF_4.addFeatures(features_DOUNDALSOUF_4);
var lyr_DOUNDALSOUF_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOUNDALSOUF_4, 
                style: style_DOUNDALSOUF_4,
                popuplayertitle: 'DOUNDAL SOUF',
                interactive: true,
                title: '<img src="styles/legend/DOUNDALSOUF_4.png" /> DOUNDAL SOUF'
            });
var format_FAOSD3C_5 = new ol.format.GeoJSON();
var features_FAOSD3C_5 = format_FAOSD3C_5.readFeatures(json_FAOSD3C_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_FAOSD3C_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAOSD3C_5.addFeatures(features_FAOSD3C_5);
var lyr_FAOSD3C_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAOSD3C_5, 
                style: style_FAOSD3C_5,
                popuplayertitle: 'FAOSD3C',
                interactive: true,
                title: '<img src="styles/legend/FAOSD3C_5.png" /> FAOSD3C'
            });
var format_PAMSD3C_6 = new ol.format.GeoJSON();
var features_PAMSD3C_6 = format_PAMSD3C_6.readFeatures(json_PAMSD3C_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PAMSD3C_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAMSD3C_6.addFeatures(features_PAMSD3C_6);
var lyr_PAMSD3C_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAMSD3C_6, 
                style: style_PAMSD3C_6,
                popuplayertitle: 'PAMSD3C',
                interactive: true,
                title: '<img src="styles/legend/PAMSD3C_6.png" /> PAMSD3C'
            });
var format_RICOWAS_7 = new ol.format.GeoJSON();
var features_RICOWAS_7 = format_RICOWAS_7.readFeatures(json_RICOWAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_RICOWAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RICOWAS_7.addFeatures(features_RICOWAS_7);
var lyr_RICOWAS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RICOWAS_7, 
                style: style_RICOWAS_7,
                popuplayertitle: 'RICOWAS',
                interactive: true,
                title: '<img src="styles/legend/RICOWAS_7.png" /> RICOWAS'
            });
var format_SHEP_8 = new ol.format.GeoJSON();
var features_SHEP_8 = format_SHEP_8.readFeatures(json_SHEP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_SHEP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHEP_8.addFeatures(features_SHEP_8);
var lyr_SHEP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHEP_8, 
                style: style_SHEP_8,
                popuplayertitle: 'SHEP',
                interactive: true,
                title: '<img src="styles/legend/SHEP_8.png" /> SHEP'
            });
var format_SUSTAINSAHEL_9 = new ol.format.GeoJSON();
var features_SUSTAINSAHEL_9 = format_SUSTAINSAHEL_9.readFeatures(json_SUSTAINSAHEL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_SUSTAINSAHEL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSTAINSAHEL_9.addFeatures(features_SUSTAINSAHEL_9);
var lyr_SUSTAINSAHEL_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUSTAINSAHEL_9, 
                style: style_SUSTAINSAHEL_9,
                popuplayertitle: 'SUSTAIN SAHEL',
                interactive: true,
                title: '<img src="styles/legend/SUSTAINSAHEL_9.png" /> SUSTAIN SAHEL'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LIMITESCOMMUNESSOHC_1.setVisible(true);lyr_COMMUNESCOUVERTES_2.setVisible(true);lyr_DEKKILSOUF_3.setVisible(true);lyr_DOUNDALSOUF_4.setVisible(true);lyr_FAOSD3C_5.setVisible(true);lyr_PAMSD3C_6.setVisible(true);lyr_RICOWAS_7.setVisible(true);lyr_SHEP_8.setVisible(true);lyr_SUSTAINSAHEL_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LIMITESCOMMUNESSOHC_1,lyr_COMMUNESCOUVERTES_2,lyr_DEKKILSOUF_3,lyr_DOUNDALSOUF_4,lyr_FAOSD3C_5,lyr_PAMSD3C_6,lyr_RICOWAS_7,lyr_SHEP_8,lyr_SUSTAINSAHEL_9];
lyr_LIMITESCOMMUNESSOHC_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'CAR': 'CAR', 'FONCTION': 'FONCTION', 'TELEPHONE': 'TELEPHONE', });
lyr_COMMUNESCOUVERTES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_DEKKILSOUF_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_DOUNDALSOUF_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_FAOSD3C_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'CAR': 'CAR', 'FONCTION': 'FONCTION', 'TELEPHONE': 'TELEPHONE', });
lyr_PAMSD3C_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_RICOWAS_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_SHEP_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_SUSTAINSAHEL_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_LIMITESCOMMUNESSOHC_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'CAR': 'TextEdit', 'FONCTION': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_COMMUNESCOUVERTES_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_DEKKILSOUF_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_DOUNDALSOUF_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_FAOSD3C_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'CAR': 'TextEdit', 'FONCTION': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PAMSD3C_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_RICOWAS_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_SHEP_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_SUSTAINSAHEL_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_LIMITESCOMMUNESSOHC_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'CAR': 'header label - visible with data', 'FONCTION': 'hidden field', 'TELEPHONE': 'header label - visible with data', });
lyr_COMMUNESCOUVERTES_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DEKKILSOUF_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DOUNDALSOUF_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_FAOSD3C_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'CAR': 'header label - visible with data', 'FONCTION': 'hidden field', 'TELEPHONE': 'header label - visible with data', });
lyr_PAMSD3C_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_RICOWAS_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_SHEP_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_SUSTAINSAHEL_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_SUSTAINSAHEL_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});