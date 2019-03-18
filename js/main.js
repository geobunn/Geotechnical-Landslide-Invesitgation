
var mybounds = [[42.11, -124.27],[42.31, -124.47]];

// Add Basemaps
var openstreetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    maxNativeZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 25,
    maxNativeZoom: 19,
});



// Add Airstrip Ortho
var ortho_0303top = L.tileLayer('https://research.engr.oregonstate.edu/geomatics/projects/OregonCoast/Hooskanaden/Feb2019/uas/ortho/0303top/{z}/{x}/{y}.png',{
    minZoom: 10,
    maxNativeZoom: 23,
    maxZoom: 25,
    noWrap: true,
    bounds: mybounds,
    attribution: '<div id="credits" style="display:inline">UAS Imagery acquired by Oregon State University in collaboration with ODOT | Basemap &copy; ArcGIS</div>'
});

// Add Airstrip DSM
var dsm_0303top = L.tileLayer('https://research.engr.oregonstate.edu/geomatics/projects/OregonCoast/Hooskanaden/Feb2019/uas/ortho/0303topdsm/{z}/{x}/{y}.png',{
    minZoom: 10,
    maxNativeZoom: 21,
    maxZoom: 25,
    noWrap: true,
    bounds: mybounds,
    attribution: '<div id="credits" style="display:inline">UAS Imagery acquired by Oregon State University in collaboration with ODOT | Basemap &copy; ArcGIS</div>'
});

var orthogroup = L.layerGroup(
    [ortho_0303top]);

var dsmgroup = L.layerGroup(
    [dsm_0303top]);

// initialize the map
// var mymap = L.map('map', {
//     center: [42.218612, -124.372316],
//     zoom: 17,
//     maxZoom: 25,
//     minZoom: 11,
//     maxBounds: mybounds,
//     maxBoundsViscosity: 1.0,
//     layers: [Esri_WorldImagery, orthogroup],
//     detectRetina: true // detect whether the sceen is high resolution or not.
// });

// make sidebar
var basemaps = {
    "ESRI World Imagery": Esri_WorldImagery,
    "openstreetmap": openstreetmap

};

var overlays = {
    "Mar 3, 2019 Orthophoto": orthogroup,
    "Mar 3, 2019 DSM"  : dsmgroup
};

// L.control.layers(basemaps,overlays,
//     {"collapsed" : false}
// ).addTo(mymap);
//
// L.control.scale().addTo(mymap);
