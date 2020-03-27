var ponto = ee.Geometry.Point([-56.087416439244976,-9.898308621320513]);

var image = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA')
  .filter('CLOUD_COVER > 10')
  .filter('CLOUD_COVER < 20')
  .filterBounds(ponto)
  .select('B6','B5','B4');

//Gerar estatísticas sobre cobertura de nuvens
var cloudStats = image.aggregate_stats('CLOUD_COVER');
print('Estatísticas cobertura de nuvens:', cloudStats);

Map.addLayer(image,{max: 0.45444029569625854,min: 0.03673873841762543},'Teste');