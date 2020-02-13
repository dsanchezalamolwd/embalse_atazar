var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Baells_completo_presa_1 = new ol.format.GeoJSON();
var features_Baells_completo_presa_1 = format_Baells_completo_presa_1.readFeatures(json_Baells_completo_presa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baells_completo_presa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baells_completo_presa_1.addFeatures(features_Baells_completo_presa_1);
var lyr_Baells_completo_presa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Baells_completo_presa_1, 
                style: style_Baells_completo_presa_1,
                interactive: true,
    title: 'Baells_completo_presa<br />\
    <img src="styles/legend/Baells_completo_presa_1_0.png" />  -15 - -10 <br />\
    <img src="styles/legend/Baells_completo_presa_1_1.png" />  -10 - -5 <br />\
    <img src="styles/legend/Baells_completo_presa_1_2.png" />  -5 - 0 <br />\
    <img src="styles/legend/Baells_completo_presa_1_3.png" />  0 - 5 <br />\
    <img src="styles/legend/Baells_completo_presa_1_4.png" />  5 - 10 <br />\
    <img src="styles/legend/Baells_completo_presa_1_5.png" />  10 - 15 <br />'
        });
var format_PR_Baells_Embalse_06_2 = new ol.format.GeoJSON();
var features_PR_Baells_Embalse_06_2 = format_PR_Baells_Embalse_06_2.readFeatures(json_PR_Baells_Embalse_06_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PR_Baells_Embalse_06_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PR_Baells_Embalse_06_2.addFeatures(features_PR_Baells_Embalse_06_2);
var lyr_PR_Baells_Embalse_06_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PR_Baells_Embalse_06_2, 
                style: style_PR_Baells_Embalse_06_2,
                interactive: true,
                title: '<img src="styles/legend/PR_Baells_Embalse_06_2.png" /> PR_Baells_Embalse_06'
            });

lyr_EsriWorldImagery_0.setVisible(true);lyr_Baells_completo_presa_1.setVisible(true);lyr_PR_Baells_Embalse_06_2.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_Baells_completo_presa_1,lyr_PR_Baells_Embalse_06_2];
lyr_Baells_completo_presa_1.set('fieldAliases', {'ID': 'ID', 'SVET': 'SVET', 'LVET': 'LVET', 'LAT': 'LAT', 'LON': 'LON', 'HEIGHT': 'HEIGHT', 'HEIGHT WRT': 'HEIGHT WRT', 'SIGMA HEIG': 'SIGMA HEIG', 'VEL': 'VEL', 'SIGMA VEL': 'SIGMA VEL', 'CUM DISP': 'CUM DISP', 'COHER': 'COHER', '11-Apr-201': '11-Apr-201', '05-May-201': '05-May-201', '17-May-201': '17-May-201', '29-May-201': '29-May-201', '04-Jul-201': '04-Jul-201', '16-Jul-201': '16-Jul-201', '28-Jul-201': '28-Jul-201', '09-Aug-201': '09-Aug-201', '21-Aug-201': '21-Aug-201', '02-Sep-201': '02-Sep-201', '14-Sep-201': '14-Sep-201', '26-Sep-201': '26-Sep-201', '08-Oct-201': '08-Oct-201', '01-Nov-201': '01-Nov-201', '13-Nov-201': '13-Nov-201', '25-Nov-201': '25-Nov-201', '07-Dec-201': '07-Dec-201', '19-Dec-201': '19-Dec-201', '31-Dec-201': '31-Dec-201', '12-Jan-201': '12-Jan-201', '24-Jan-201': '24-Jan-201', '05-Feb-201': '05-Feb-201', '17-Feb-201': '17-Feb-201', '29-Feb-201': '29-Feb-201', '12-Mar-201': '12-Mar-201', '24-Mar-201': '24-Mar-201', '05-Apr-201': '05-Apr-201', '17-Apr-201': '17-Apr-201', '29-Apr-201': '29-Apr-201', '11-May-201': '11-May-201', '23-May-201': '23-May-201', '04-Jun-201': '04-Jun-201', '28-Jun-201': '28-Jun-201', '10-Jul-201': '10-Jul-201', '22-Jul-201': '22-Jul-201', '03-Aug-201': '03-Aug-201', '15-Aug-201': '15-Aug-201', '27-Aug-201': '27-Aug-201', '08-Sep-201': '08-Sep-201', '20-Sep-201': '20-Sep-201', 'anotacion': 'anotacion', 'ID2': 'ID2', });
lyr_PR_Baells_Embalse_06_2.set('fieldAliases', {'ID': 'ID', 'SVET': 'SVET', 'LVET': 'LVET', 'LAT': 'LAT', 'LON': 'LON', 'HEIGHT': 'HEIGHT', 'HEIGHT WRT': 'HEIGHT WRT', 'SIGMA HEIG': 'SIGMA HEIG', 'VEL': 'VEL', 'SIGMA VEL': 'SIGMA VEL', 'CUM DISP': 'CUM DISP', 'COHER': 'COHER', '11-Apr-201': '11-Apr-201', '05-May-201': '05-May-201', '17-May-201': '17-May-201', '29-May-201': '29-May-201', '04-Jul-201': '04-Jul-201', '16-Jul-201': '16-Jul-201', '28-Jul-201': '28-Jul-201', '09-Aug-201': '09-Aug-201', '21-Aug-201': '21-Aug-201', '02-Sep-201': '02-Sep-201', '14-Sep-201': '14-Sep-201', '26-Sep-201': '26-Sep-201', '08-Oct-201': '08-Oct-201', '01-Nov-201': '01-Nov-201', '13-Nov-201': '13-Nov-201', '25-Nov-201': '25-Nov-201', '07-Dec-201': '07-Dec-201', '19-Dec-201': '19-Dec-201', '31-Dec-201': '31-Dec-201', '12-Jan-201': '12-Jan-201', '24-Jan-201': '24-Jan-201', '05-Feb-201': '05-Feb-201', '17-Feb-201': '17-Feb-201', '29-Feb-201': '29-Feb-201', '12-Mar-201': '12-Mar-201', '24-Mar-201': '24-Mar-201', '05-Apr-201': '05-Apr-201', '17-Apr-201': '17-Apr-201', '29-Apr-201': '29-Apr-201', '11-May-201': '11-May-201', '23-May-201': '23-May-201', '04-Jun-201': '04-Jun-201', '28-Jun-201': '28-Jun-201', '10-Jul-201': '10-Jul-201', '22-Jul-201': '22-Jul-201', '03-Aug-201': '03-Aug-201', '15-Aug-201': '15-Aug-201', '27-Aug-201': '27-Aug-201', '08-Sep-201': '08-Sep-201', '20-Sep-201': '20-Sep-201', });
lyr_Baells_completo_presa_1.set('fieldImages', {'ID': 'Range', 'SVET': 'Range', 'LVET': 'Range', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'HEIGHT': 'TextEdit', 'HEIGHT WRT': 'TextEdit', 'SIGMA HEIG': 'TextEdit', 'VEL': 'TextEdit', 'SIGMA VEL': 'TextEdit', 'CUM DISP': 'TextEdit', 'COHER': 'TextEdit', '11-Apr-201': 'TextEdit', '05-May-201': 'TextEdit', '17-May-201': 'TextEdit', '29-May-201': 'TextEdit', '04-Jul-201': 'TextEdit', '16-Jul-201': 'TextEdit', '28-Jul-201': 'TextEdit', '09-Aug-201': 'TextEdit', '21-Aug-201': 'TextEdit', '02-Sep-201': 'TextEdit', '14-Sep-201': 'TextEdit', '26-Sep-201': 'TextEdit', '08-Oct-201': 'TextEdit', '01-Nov-201': 'TextEdit', '13-Nov-201': 'TextEdit', '25-Nov-201': 'TextEdit', '07-Dec-201': 'TextEdit', '19-Dec-201': 'TextEdit', '31-Dec-201': 'TextEdit', '12-Jan-201': 'TextEdit', '24-Jan-201': 'TextEdit', '05-Feb-201': 'TextEdit', '17-Feb-201': 'TextEdit', '29-Feb-201': 'TextEdit', '12-Mar-201': 'TextEdit', '24-Mar-201': 'TextEdit', '05-Apr-201': 'TextEdit', '17-Apr-201': 'TextEdit', '29-Apr-201': 'TextEdit', '11-May-201': 'TextEdit', '23-May-201': 'TextEdit', '04-Jun-201': 'TextEdit', '28-Jun-201': 'TextEdit', '10-Jul-201': 'TextEdit', '22-Jul-201': 'TextEdit', '03-Aug-201': 'TextEdit', '15-Aug-201': 'TextEdit', '27-Aug-201': 'TextEdit', '08-Sep-201': 'TextEdit', '20-Sep-201': 'TextEdit', 'anotacion': 'TextEdit', 'ID2': 'Range', });
lyr_PR_Baells_Embalse_06_2.set('fieldImages', {'ID': 'TextEdit', 'SVET': 'TextEdit', 'LVET': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'HEIGHT': 'TextEdit', 'HEIGHT WRT': 'TextEdit', 'SIGMA HEIG': 'TextEdit', 'VEL': 'TextEdit', 'SIGMA VEL': 'TextEdit', 'CUM DISP': 'TextEdit', 'COHER': 'TextEdit', '11-Apr-201': 'TextEdit', '05-May-201': 'TextEdit', '17-May-201': 'TextEdit', '29-May-201': 'TextEdit', '04-Jul-201': 'TextEdit', '16-Jul-201': 'TextEdit', '28-Jul-201': 'TextEdit', '09-Aug-201': 'TextEdit', '21-Aug-201': 'TextEdit', '02-Sep-201': 'TextEdit', '14-Sep-201': 'TextEdit', '26-Sep-201': 'TextEdit', '08-Oct-201': 'TextEdit', '01-Nov-201': 'TextEdit', '13-Nov-201': 'TextEdit', '25-Nov-201': 'TextEdit', '07-Dec-201': 'TextEdit', '19-Dec-201': 'TextEdit', '31-Dec-201': 'TextEdit', '12-Jan-201': 'TextEdit', '24-Jan-201': 'TextEdit', '05-Feb-201': 'TextEdit', '17-Feb-201': 'TextEdit', '29-Feb-201': 'TextEdit', '12-Mar-201': 'TextEdit', '24-Mar-201': 'TextEdit', '05-Apr-201': 'TextEdit', '17-Apr-201': 'TextEdit', '29-Apr-201': 'TextEdit', '11-May-201': 'TextEdit', '23-May-201': 'TextEdit', '04-Jun-201': 'TextEdit', '28-Jun-201': 'TextEdit', '10-Jul-201': 'TextEdit', '22-Jul-201': 'TextEdit', '03-Aug-201': 'TextEdit', '15-Aug-201': 'TextEdit', '27-Aug-201': 'TextEdit', '08-Sep-201': 'TextEdit', '20-Sep-201': 'TextEdit', });
lyr_Baells_completo_presa_1.set('fieldLabels', {'ID': 'no label', 'SVET': 'no label', 'LVET': 'no label', 'LAT': 'no label', 'LON': 'no label', 'HEIGHT': 'no label', 'HEIGHT WRT': 'no label', 'SIGMA HEIG': 'no label', 'VEL': 'no label', 'SIGMA VEL': 'no label', 'CUM DISP': 'no label', 'COHER': 'no label', '11-Apr-201': 'no label', '05-May-201': 'no label', '17-May-201': 'no label', '29-May-201': 'no label', '04-Jul-201': 'no label', '16-Jul-201': 'no label', '28-Jul-201': 'no label', '09-Aug-201': 'no label', '21-Aug-201': 'no label', '02-Sep-201': 'no label', '14-Sep-201': 'no label', '26-Sep-201': 'no label', '08-Oct-201': 'no label', '01-Nov-201': 'no label', '13-Nov-201': 'no label', '25-Nov-201': 'no label', '07-Dec-201': 'no label', '19-Dec-201': 'no label', '31-Dec-201': 'no label', '12-Jan-201': 'no label', '24-Jan-201': 'no label', '05-Feb-201': 'no label', '17-Feb-201': 'no label', '29-Feb-201': 'no label', '12-Mar-201': 'no label', '24-Mar-201': 'no label', '05-Apr-201': 'no label', '17-Apr-201': 'no label', '29-Apr-201': 'no label', '11-May-201': 'no label', '23-May-201': 'no label', '04-Jun-201': 'no label', '28-Jun-201': 'no label', '10-Jul-201': 'no label', '22-Jul-201': 'no label', '03-Aug-201': 'no label', '15-Aug-201': 'no label', '27-Aug-201': 'no label', '08-Sep-201': 'no label', '20-Sep-201': 'no label', 'anotacion': 'no label', 'ID2': 'no label', });
lyr_PR_Baells_Embalse_06_2.set('fieldLabels', {'ID': 'no label', 'SVET': 'no label', 'LVET': 'no label', 'LAT': 'no label', 'LON': 'no label', 'HEIGHT': 'no label', 'HEIGHT WRT': 'header label', 'SIGMA HEIG': 'no label', 'VEL': 'no label', 'SIGMA VEL': 'no label', 'CUM DISP': 'no label', 'COHER': 'no label', '11-Apr-201': 'no label', '05-May-201': 'no label', '17-May-201': 'no label', '29-May-201': 'no label', '04-Jul-201': 'no label', '16-Jul-201': 'no label', '28-Jul-201': 'no label', '09-Aug-201': 'no label', '21-Aug-201': 'no label', '02-Sep-201': 'no label', '14-Sep-201': 'no label', '26-Sep-201': 'no label', '08-Oct-201': 'no label', '01-Nov-201': 'no label', '13-Nov-201': 'no label', '25-Nov-201': 'no label', '07-Dec-201': 'no label', '19-Dec-201': 'no label', '31-Dec-201': 'no label', '12-Jan-201': 'no label', '24-Jan-201': 'no label', '05-Feb-201': 'no label', '17-Feb-201': 'no label', '29-Feb-201': 'no label', '12-Mar-201': 'no label', '24-Mar-201': 'no label', '05-Apr-201': 'no label', '17-Apr-201': 'no label', '29-Apr-201': 'no label', '11-May-201': 'no label', '23-May-201': 'no label', '04-Jun-201': 'no label', '28-Jun-201': 'no label', '10-Jul-201': 'no label', '22-Jul-201': 'no label', '03-Aug-201': 'no label', '15-Aug-201': 'no label', '27-Aug-201': 'no label', '08-Sep-201': 'no label', '20-Sep-201': 'no label', });
lyr_PR_Baells_Embalse_06_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});