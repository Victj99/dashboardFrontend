
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Habilitaciones2020_1": {
            "type": "geojson",
            "data": json_Habilitaciones2020_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Habilitaciones2020_1_0",
            "type": "circle",
            "source": "Habilitaciones2020_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Concesionario'], 'Calidda'], ['/', 7.5590551182, 2], ['==', ['get', 'Concesionario'], 'Contugas'], ['/', 7.5590551182, 2], ['==', ['get', 'Concesionario'], 'Naturgy'], ['/', 7.5590551182, 2], ['==', ['get', 'Concesionario'], 'Quavii'], ['/', 7.5590551182, 2], 1], 'circle-color': ['case', ['==', ['get', 'Concesionario'], 'Calidda'], '#3b34f0', ['==', ['get', 'Concesionario'], 'Contugas'], '#67ddca', ['==', ['get', 'Concesionario'], 'Naturgy'], '#96e26a', ['==', ['get', 'Concesionario'], 'Quavii'], '#f033c1', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'Concesionario'], 'Calidda'], 1.0, ['==', ['get', 'Concesionario'], 'Contugas'], 1.0, ['==', ['get', 'Concesionario'], 'Naturgy'], 1.0, ['==', ['get', 'Concesionario'], 'Quavii'], 1.0, 1], 'circle-stroke-width': ['case', ['==', ['get', 'Concesionario'], 'Calidda'], 1, ['==', ['get', 'Concesionario'], 'Contugas'], 1, ['==', ['get', 'Concesionario'], 'Naturgy'], 1, ['==', ['get', 'Concesionario'], 'Quavii'], 1, 1], 'circle-stroke-color': ['case', ['==', ['get', 'Concesionario'], 'Calidda'], '#232323', ['==', ['get', 'Concesionario'], 'Contugas'], '#232323', ['==', ['get', 'Concesionario'], 'Naturgy'], '#232323', ['==', ['get', 'Concesionario'], 'Quavii'], '#232323', '#000000']}
        }
],
}