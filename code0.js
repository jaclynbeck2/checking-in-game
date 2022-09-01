gdjs.Untitled_32scene1Code = {};
gdjs.Untitled_32scene1Code.GDNameObjects1= [];
gdjs.Untitled_32scene1Code.GDNameObjects2= [];
gdjs.Untitled_32scene1Code.GDNameObjects3= [];
gdjs.Untitled_32scene1Code.GDButtonstartObjects1= [];
gdjs.Untitled_32scene1Code.GDButtonstartObjects2= [];
gdjs.Untitled_32scene1Code.GDButtonstartObjects3= [];
gdjs.Untitled_32scene1Code.GDhotelObjects1= [];
gdjs.Untitled_32scene1Code.GDhotelObjects2= [];
gdjs.Untitled_32scene1Code.GDhotelObjects3= [];

gdjs.Untitled_32scene1Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene1Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene1Code.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32scene1Code.mapOfGDgdjs_46Untitled_9532scene1Code_46GDButtonstartObjects1Objects = Hashtable.newFrom({"Buttonstart": gdjs.Untitled_32scene1Code.GDButtonstartObjects1});
gdjs.Untitled_32scene1Code.mapOfGDgdjs_46Untitled_9532scene1Code_46GDButtonstartObjects1Objects = Hashtable.newFrom({"Buttonstart": gdjs.Untitled_32scene1Code.GDButtonstartObjects1});
gdjs.Untitled_32scene1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Untitled_32scene1Code.GDButtonstartObjects1, gdjs.Untitled_32scene1Code.GDButtonstartObjects2);

{for(var i = 0, len = gdjs.Untitled_32scene1Code.GDButtonstartObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene1Code.GDButtonstartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Untitled_32scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


};gdjs.Untitled_32scene1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Game sound.mp3", 1, true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonstart"), gdjs.Untitled_32scene1Code.GDButtonstartObjects1);

gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene1Code.mapOfGDgdjs_46Untitled_9532scene1Code_46GDButtonstartObjects1Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene1Code.GDButtonstartObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene1Code.GDButtonstartObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene1Code.GDButtonstartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttonstart"), gdjs.Untitled_32scene1Code.GDButtonstartObjects1);

gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene1Code.mapOfGDgdjs_46Untitled_9532scene1Code_46GDButtonstartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene1Code.GDButtonstartObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene1Code.GDButtonstartObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene1Code.GDButtonstartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.Untitled_32scene1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.Untitled_32scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene1Code.GDNameObjects1.length = 0;
gdjs.Untitled_32scene1Code.GDNameObjects2.length = 0;
gdjs.Untitled_32scene1Code.GDNameObjects3.length = 0;
gdjs.Untitled_32scene1Code.GDButtonstartObjects1.length = 0;
gdjs.Untitled_32scene1Code.GDButtonstartObjects2.length = 0;
gdjs.Untitled_32scene1Code.GDButtonstartObjects3.length = 0;
gdjs.Untitled_32scene1Code.GDhotelObjects1.length = 0;
gdjs.Untitled_32scene1Code.GDhotelObjects2.length = 0;
gdjs.Untitled_32scene1Code.GDhotelObjects3.length = 0;

gdjs.Untitled_32scene1Code.eventsList1(runtimeScene);
return;

}

gdjs['Untitled_32scene1Code'] = gdjs.Untitled_32scene1Code;
