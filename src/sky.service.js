(function(){"use strict";function e(){return function(e,a){var r=new BABYLON.SkyMaterial("skyMaterial",e);r.backFaceCulling=!1;var t=BABYLON.Mesh.CreateBox("skyBox",8e3,e);t.material=r,t.isPickable=!1;var n=function(a,r,n){var i=[{frame:0,value:r},{frame:100,value:n}],o=new BABYLON.Animation("animation",a,100,BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);o.setKeys(i),e.stopAnimation(t),e.beginDirectAnimation(t,[o],0,100,!1,1)};a?(n("material.inclination",r.inclination,-.5),r.inclination=.5,r.azimuth=1):n("material.inclination",r.inclination,0)}}angular.module("ngBabylonjs").factory("SkyBox",e),e.$inject=[]})();
