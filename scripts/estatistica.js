var ponto = ee.Geometry.Point([-56.087416439244976,-9.898308621320513]);

var inicial = '2018-01-01'
var final = '2019-12-31'

var image = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA')
  .filterMetadata('CLOUD_COVER','less_than',5)
  .filterDate(inicial, final)
  .filterBounds(ponto)
  .select('B6','B5','B4');

print('Quantidade de imagens', image.size());

//Gerar estatísticas sobre cobertura de nuvens
var cloudStats = image.aggregate_stats('CLOUD_COVER');
print('Estatísticas cobertura de nuvens:', cloudStats);

Map.addLayer(image,{max: 0.45444029569625854,min: 0.03673873841762543},'Teste');