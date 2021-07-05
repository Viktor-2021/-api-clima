$.getScript('scripts_key.js', function(){
    getKey();
});

$(document).ready(function(){

    $('#buscar_ciudad').click(function(){
        $('#my_form').submit();
    });

    $('form').submit(function() {
        var ciudad = $('#ciudad_buscada').val();
        if (ciudad.trim().length > 0)
        {
            var units = 'metric';
            var appid = getKey();
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&language=es&&units=${units}&appid=${appid}`;
        
            $.get(url, function(data) {
                var html = `<h4 id="ciudad" class="fw-bold text-capitalize">${data.name}: ${data.weather[0].description}</h4>
                            <h4 id="temperatura">Temperatura: ${data.main.temp}°C</h4>
                            <h4 id="coordenadas">Coordenadas: ${data.coord.lon},${data.coord.lat}</h4>`;
                                
                $('#info_weather').removeClass('fw-bold text-danger').html(html);
                

            },'json').fail(function(){
                $('#info_weather').addClass('fw-bold text-danger').html("No se encuentra la ciudad buscada");
               
            });
            
            return false;
        }
        else
        {
            alert("Ingresa Ciudad");
        }
    });

});