gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.forEachCount0_2 = 0;

gdjs.Untitled_32scene2Code.forEachCount1_2 = 0;

gdjs.Untitled_32scene2Code.forEachCount2_2 = 0;

gdjs.Untitled_32scene2Code.forEachIndex2 = 0;

gdjs.Untitled_32scene2Code.forEachObjects2 = [];

gdjs.Untitled_32scene2Code.forEachTotalCount2 = 0;

gdjs.Untitled_32scene2Code.GDSkyObjects1= [];
gdjs.Untitled_32scene2Code.GDSkyObjects2= [];
gdjs.Untitled_32scene2Code.GDSkyObjects3= [];
gdjs.Untitled_32scene2Code.GDSkyObjects4= [];
gdjs.Untitled_32scene2Code.GDHotelObjects1= [];
gdjs.Untitled_32scene2Code.GDHotelObjects2= [];
gdjs.Untitled_32scene2Code.GDHotelObjects3= [];
gdjs.Untitled_32scene2Code.GDHotelObjects4= [];
gdjs.Untitled_32scene2Code.GDBellhopObjects1= [];
gdjs.Untitled_32scene2Code.GDBellhopObjects2= [];
gdjs.Untitled_32scene2Code.GDBellhopObjects3= [];
gdjs.Untitled_32scene2Code.GDBellhopObjects4= [];
gdjs.Untitled_32scene2Code.GDluggage1Objects1= [];
gdjs.Untitled_32scene2Code.GDluggage1Objects2= [];
gdjs.Untitled_32scene2Code.GDluggage1Objects3= [];
gdjs.Untitled_32scene2Code.GDluggage1Objects4= [];
gdjs.Untitled_32scene2Code.GDluggage2Objects1= [];
gdjs.Untitled_32scene2Code.GDluggage2Objects2= [];
gdjs.Untitled_32scene2Code.GDluggage2Objects3= [];
gdjs.Untitled_32scene2Code.GDluggage2Objects4= [];
gdjs.Untitled_32scene2Code.GDScoreObjects1= [];
gdjs.Untitled_32scene2Code.GDScoreObjects2= [];
gdjs.Untitled_32scene2Code.GDScoreObjects3= [];
gdjs.Untitled_32scene2Code.GDScoreObjects4= [];
gdjs.Untitled_32scene2Code.GDdamage1Objects1= [];
gdjs.Untitled_32scene2Code.GDdamage1Objects2= [];
gdjs.Untitled_32scene2Code.GDdamage1Objects3= [];
gdjs.Untitled_32scene2Code.GDdamage1Objects4= [];
gdjs.Untitled_32scene2Code.GDdamage2Objects1= [];
gdjs.Untitled_32scene2Code.GDdamage2Objects2= [];
gdjs.Untitled_32scene2Code.GDdamage2Objects3= [];
gdjs.Untitled_32scene2Code.GDdamage2Objects4= [];
gdjs.Untitled_32scene2Code.GDdamage3Objects1= [];
gdjs.Untitled_32scene2Code.GDdamage3Objects2= [];
gdjs.Untitled_32scene2Code.GDdamage3Objects3= [];
gdjs.Untitled_32scene2Code.GDdamage3Objects4= [];
gdjs.Untitled_32scene2Code.GDLivesObjects1= [];
gdjs.Untitled_32scene2Code.GDLivesObjects2= [];
gdjs.Untitled_32scene2Code.GDLivesObjects3= [];
gdjs.Untitled_32scene2Code.GDLivesObjects4= [];
gdjs.Untitled_32scene2Code.GDGameoverObjects1= [];
gdjs.Untitled_32scene2Code.GDGameoverObjects2= [];
gdjs.Untitled_32scene2Code.GDGameoverObjects3= [];
gdjs.Untitled_32scene2Code.GDGameoverObjects4= [];
gdjs.Untitled_32scene2Code.GDButtontryagainObjects1= [];
gdjs.Untitled_32scene2Code.GDButtontryagainObjects2= [];
gdjs.Untitled_32scene2Code.GDButtontryagainObjects3= [];
gdjs.Untitled_32scene2Code.GDButtontryagainObjects4= [];
gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1= [];
gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2= [];
gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects3= [];
gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects4= [];
gdjs.Untitled_32scene2Code.GDEasyObjects1= [];
gdjs.Untitled_32scene2Code.GDEasyObjects2= [];
gdjs.Untitled_32scene2Code.GDEasyObjects3= [];
gdjs.Untitled_32scene2Code.GDEasyObjects4= [];
gdjs.Untitled_32scene2Code.GDRightarrowObjects1= [];
gdjs.Untitled_32scene2Code.GDRightarrowObjects2= [];
gdjs.Untitled_32scene2Code.GDRightarrowObjects3= [];
gdjs.Untitled_32scene2Code.GDRightarrowObjects4= [];
gdjs.Untitled_32scene2Code.GDLeftarrowObjects1= [];
gdjs.Untitled_32scene2Code.GDLeftarrowObjects2= [];
gdjs.Untitled_32scene2Code.GDLeftarrowObjects3= [];
gdjs.Untitled_32scene2Code.GDLeftarrowObjects4= [];
gdjs.Untitled_32scene2Code.GDHighscoreObjects1= [];
gdjs.Untitled_32scene2Code.GDHighscoreObjects2= [];
gdjs.Untitled_32scene2Code.GDHighscoreObjects3= [];
gdjs.Untitled_32scene2Code.GDHighscoreObjects4= [];

gdjs.Untitled_32scene2Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bellhop"), gdjs.Untitled_32scene2Code.GDBellhopObjects2);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects2[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bellhop"), gdjs.Untitled_32scene2Code.GDBellhopObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects1[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects1[i].setAnimation(1);
}
}}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDluggage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDluggage2Objects2Objects = Hashtable.newFrom({"luggage1": gdjs.Untitled_32scene2Code.GDluggage1Objects2, "luggage2": gdjs.Untitled_32scene2Code.GDluggage2Objects2});
gdjs.Untitled_32scene2Code.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(3, 10), "luggagecreation");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.Untitled_32scene2Code.GDluggage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDluggage2Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDluggage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDluggage2Objects2Objects, "luggage" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 2)), 265, 200, "10");
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage1Objects2[i].setScale(gdjs.randomFloatInRange(0.5, 0.7));
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage2Objects2[i].setScale(gdjs.randomFloatInRange(0.5, 0.7));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "luggagecreation");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("luggage1"), gdjs.Untitled_32scene2Code.GDluggage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("luggage2"), gdjs.Untitled_32scene2Code.GDluggage2Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage1Objects1[i].addPolarForce(90, 150, 0);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage2Objects1[i].addPolarForce(90, 150, 0);
}
}}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDluggage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDluggage2Objects2Objects = Hashtable.newFrom({"luggage1": gdjs.Untitled_32scene2Code.GDluggage1Objects2, "luggage2": gdjs.Untitled_32scene2Code.GDluggage2Objects2});
gdjs.Untitled_32scene2Code.eventsList2 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(2, 10), "luggagecreation2");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.Untitled_32scene2Code.GDluggage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDluggage2Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDluggage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDluggage2Objects2Objects, "luggage" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 2)), 370, 200, "10");
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage1Objects2[i].setScale(gdjs.randomFloatInRange(0.5, 0.7));
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage2Objects2[i].setScale(gdjs.randomFloatInRange(0.5, 0.7));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "luggagecreation2");
}}

}


{


{
}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDluggage1Objects1ObjectsGDgdjs_46Untitled_9532scene2Code_46GDluggage2Objects1Objects = Hashtable.newFrom({"luggage1": gdjs.Untitled_32scene2Code.GDluggage1Objects1, "luggage2": gdjs.Untitled_32scene2Code.GDluggage2Objects1});
gdjs.Untitled_32scene2Code.eventsList3 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(3, 10), "luggagecreation3");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.Untitled_32scene2Code.GDluggage1Objects1.length = 0;

gdjs.Untitled_32scene2Code.GDluggage2Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDluggage1Objects1ObjectsGDgdjs_46Untitled_9532scene2Code_46GDluggage2Objects1Objects, "luggage" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 2)), 475, 200, "10");
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage1Objects1[i].setScale(gdjs.randomFloatInRange(0.5, 0.7));
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage2Objects1[i].setScale(gdjs.randomFloatInRange(0.5, 0.7));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "luggagecreation3");
}}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDBellhopObjects2Objects = Hashtable.newFrom({"Bellhop": gdjs.Untitled_32scene2Code.GDBellhopObjects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDluggage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDluggage2Objects2Objects = Hashtable.newFrom({"luggage1": gdjs.Untitled_32scene2Code.GDluggage1Objects2, "luggage2": gdjs.Untitled_32scene2Code.GDluggage2Objects2});
gdjs.Untitled_32scene2Code.eventsList4 = function(runtimeScene) {

};gdjs.Untitled_32scene2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("luggage1"), gdjs.Untitled_32scene2Code.GDluggage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("luggage2"), gdjs.Untitled_32scene2Code.GDluggage2Objects1);

gdjs.Untitled_32scene2Code.forEachTotalCount2 = 0;
gdjs.Untitled_32scene2Code.forEachObjects2.length = 0;
gdjs.Untitled_32scene2Code.forEachCount0_2 = gdjs.Untitled_32scene2Code.GDluggage1Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount0_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDluggage1Objects1);
gdjs.Untitled_32scene2Code.forEachCount1_2 = gdjs.Untitled_32scene2Code.GDluggage2Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount1_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDluggage2Objects1);
for(gdjs.Untitled_32scene2Code.forEachIndex2 = 0;gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachTotalCount2;++gdjs.Untitled_32scene2Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bellhop"), gdjs.Untitled_32scene2Code.GDBellhopObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32scene2Code.GDScoreObjects2);
gdjs.Untitled_32scene2Code.GDluggage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDluggage2Objects2.length = 0;


if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2) {
    gdjs.Untitled_32scene2Code.GDluggage1Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
else if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2+gdjs.Untitled_32scene2Code.forEachCount1_2) {
    gdjs.Untitled_32scene2Code.GDluggage2Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDBellhopObjects2Objects, gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDluggage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDluggage2Objects2Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDScoreObjects2[i].setString("Score:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "monster.wav", false, 0, 1);
}}
}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects = Hashtable.newFrom({"damage1": gdjs.Untitled_32scene2Code.GDdamage1Objects2, "damage2": gdjs.Untitled_32scene2Code.GDdamage2Objects2, "damage3": gdjs.Untitled_32scene2Code.GDdamage3Objects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects = Hashtable.newFrom({"damage1": gdjs.Untitled_32scene2Code.GDdamage1Objects2, "damage2": gdjs.Untitled_32scene2Code.GDdamage2Objects2, "damage3": gdjs.Untitled_32scene2Code.GDdamage3Objects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDBellhopObjects2Objects = Hashtable.newFrom({"Bellhop": gdjs.Untitled_32scene2Code.GDBellhopObjects2});
gdjs.Untitled_32scene2Code.eventsList6 = function(runtimeScene) {

};gdjs.Untitled_32scene2Code.eventsList7 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(5, 11), "ObstacleTimer");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.Untitled_32scene2Code.GDdamage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage2Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage3Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects, "damage" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), 265, 200, "10");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleTimer");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("damage1"), gdjs.Untitled_32scene2Code.GDdamage1Objects2);
gdjs.copyArray(runtimeScene.getObjects("damage2"), gdjs.Untitled_32scene2Code.GDdamage2Objects2);
gdjs.copyArray(runtimeScene.getObjects("damage3"), gdjs.Untitled_32scene2Code.GDdamage3Objects2);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("GameSpeed")), 0);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2[i].setZOrder(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("damage1"), gdjs.Untitled_32scene2Code.GDdamage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("damage2"), gdjs.Untitled_32scene2Code.GDdamage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("damage3"), gdjs.Untitled_32scene2Code.GDdamage3Objects1);

gdjs.Untitled_32scene2Code.forEachTotalCount2 = 0;
gdjs.Untitled_32scene2Code.forEachObjects2.length = 0;
gdjs.Untitled_32scene2Code.forEachCount0_2 = gdjs.Untitled_32scene2Code.GDdamage1Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount0_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage1Objects1);
gdjs.Untitled_32scene2Code.forEachCount1_2 = gdjs.Untitled_32scene2Code.GDdamage2Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount1_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage2Objects1);
gdjs.Untitled_32scene2Code.forEachCount2_2 = gdjs.Untitled_32scene2Code.GDdamage3Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount2_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage3Objects1);
for(gdjs.Untitled_32scene2Code.forEachIndex2 = 0;gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachTotalCount2;++gdjs.Untitled_32scene2Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bellhop"), gdjs.Untitled_32scene2Code.GDBellhopObjects2);
gdjs.Untitled_32scene2Code.GDdamage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage2Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage3Objects2.length = 0;


if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
else if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2+gdjs.Untitled_32scene2Code.forEachCount1_2) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
else if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2+gdjs.Untitled_32scene2Code.forEachCount1_2+gdjs.Untitled_32scene2Code.forEachCount2_2) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects, gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDBellhopObjects2Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ding Ding - Sound Effect (HD).mp3", false, 70, 1);
}}
}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects = Hashtable.newFrom({"damage1": gdjs.Untitled_32scene2Code.GDdamage1Objects2, "damage2": gdjs.Untitled_32scene2Code.GDdamage2Objects2, "damage3": gdjs.Untitled_32scene2Code.GDdamage3Objects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects = Hashtable.newFrom({"damage1": gdjs.Untitled_32scene2Code.GDdamage1Objects2, "damage2": gdjs.Untitled_32scene2Code.GDdamage2Objects2, "damage3": gdjs.Untitled_32scene2Code.GDdamage3Objects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDBellhopObjects2Objects = Hashtable.newFrom({"Bellhop": gdjs.Untitled_32scene2Code.GDBellhopObjects2});
gdjs.Untitled_32scene2Code.eventsList8 = function(runtimeScene) {

};gdjs.Untitled_32scene2Code.eventsList9 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(5, 11), "ObstacleTimer");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.Untitled_32scene2Code.GDdamage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage2Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage3Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects, "damage" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), 370, 200, "10");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleTimer");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("damage1"), gdjs.Untitled_32scene2Code.GDdamage1Objects2);
gdjs.copyArray(runtimeScene.getObjects("damage2"), gdjs.Untitled_32scene2Code.GDdamage2Objects2);
gdjs.copyArray(runtimeScene.getObjects("damage3"), gdjs.Untitled_32scene2Code.GDdamage3Objects2);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2[i].setZOrder(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("damage1"), gdjs.Untitled_32scene2Code.GDdamage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("damage2"), gdjs.Untitled_32scene2Code.GDdamage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("damage3"), gdjs.Untitled_32scene2Code.GDdamage3Objects1);

gdjs.Untitled_32scene2Code.forEachTotalCount2 = 0;
gdjs.Untitled_32scene2Code.forEachObjects2.length = 0;
gdjs.Untitled_32scene2Code.forEachCount0_2 = gdjs.Untitled_32scene2Code.GDdamage1Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount0_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage1Objects1);
gdjs.Untitled_32scene2Code.forEachCount1_2 = gdjs.Untitled_32scene2Code.GDdamage2Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount1_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage2Objects1);
gdjs.Untitled_32scene2Code.forEachCount2_2 = gdjs.Untitled_32scene2Code.GDdamage3Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount2_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage3Objects1);
for(gdjs.Untitled_32scene2Code.forEachIndex2 = 0;gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachTotalCount2;++gdjs.Untitled_32scene2Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bellhop"), gdjs.Untitled_32scene2Code.GDBellhopObjects2);
gdjs.Untitled_32scene2Code.GDdamage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage2Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage3Objects2.length = 0;


if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
else if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2+gdjs.Untitled_32scene2Code.forEachCount1_2) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
else if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2+gdjs.Untitled_32scene2Code.forEachCount1_2+gdjs.Untitled_32scene2Code.forEachCount2_2) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects, gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDBellhopObjects2Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ding Ding - Sound Effect (HD).mp3", false, 70, 1);
}}
}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects = Hashtable.newFrom({"damage1": gdjs.Untitled_32scene2Code.GDdamage1Objects2, "damage2": gdjs.Untitled_32scene2Code.GDdamage2Objects2, "damage3": gdjs.Untitled_32scene2Code.GDdamage3Objects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects = Hashtable.newFrom({"damage1": gdjs.Untitled_32scene2Code.GDdamage1Objects2, "damage2": gdjs.Untitled_32scene2Code.GDdamage2Objects2, "damage3": gdjs.Untitled_32scene2Code.GDdamage3Objects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDBellhopObjects2Objects = Hashtable.newFrom({"Bellhop": gdjs.Untitled_32scene2Code.GDBellhopObjects2});
gdjs.Untitled_32scene2Code.eventsList10 = function(runtimeScene) {

};gdjs.Untitled_32scene2Code.eventsList11 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(5, 11), "ObstacleTimer");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.Untitled_32scene2Code.GDdamage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage2Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage3Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects, "damage" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), 475, 200, "10");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleTimer");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("damage1"), gdjs.Untitled_32scene2Code.GDdamage1Objects2);
gdjs.copyArray(runtimeScene.getObjects("damage2"), gdjs.Untitled_32scene2Code.GDdamage2Objects2);
gdjs.copyArray(runtimeScene.getObjects("damage3"), gdjs.Untitled_32scene2Code.GDdamage3Objects2);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2[i].setZOrder(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("damage1"), gdjs.Untitled_32scene2Code.GDdamage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("damage2"), gdjs.Untitled_32scene2Code.GDdamage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("damage3"), gdjs.Untitled_32scene2Code.GDdamage3Objects1);

gdjs.Untitled_32scene2Code.forEachTotalCount2 = 0;
gdjs.Untitled_32scene2Code.forEachObjects2.length = 0;
gdjs.Untitled_32scene2Code.forEachCount0_2 = gdjs.Untitled_32scene2Code.GDdamage1Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount0_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage1Objects1);
gdjs.Untitled_32scene2Code.forEachCount1_2 = gdjs.Untitled_32scene2Code.GDdamage2Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount1_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage2Objects1);
gdjs.Untitled_32scene2Code.forEachCount2_2 = gdjs.Untitled_32scene2Code.GDdamage3Objects1.length;
gdjs.Untitled_32scene2Code.forEachTotalCount2 += gdjs.Untitled_32scene2Code.forEachCount2_2;
gdjs.Untitled_32scene2Code.forEachObjects2.push.apply(gdjs.Untitled_32scene2Code.forEachObjects2,gdjs.Untitled_32scene2Code.GDdamage3Objects1);
for(gdjs.Untitled_32scene2Code.forEachIndex2 = 0;gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachTotalCount2;++gdjs.Untitled_32scene2Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bellhop"), gdjs.Untitled_32scene2Code.GDBellhopObjects2);
gdjs.Untitled_32scene2Code.GDdamage1Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage2Objects2.length = 0;

gdjs.Untitled_32scene2Code.GDdamage3Objects2.length = 0;


if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
else if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2+gdjs.Untitled_32scene2Code.forEachCount1_2) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
else if (gdjs.Untitled_32scene2Code.forEachIndex2 < gdjs.Untitled_32scene2Code.forEachCount0_2+gdjs.Untitled_32scene2Code.forEachCount1_2+gdjs.Untitled_32scene2Code.forEachCount2_2) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2.push(gdjs.Untitled_32scene2Code.forEachObjects2[gdjs.Untitled_32scene2Code.forEachIndex2]);
}
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDdamage1Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage2Objects2ObjectsGDgdjs_46Untitled_9532scene2Code_46GDdamage3Objects2Objects, gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDBellhopObjects2Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage3Objects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ding Ding - Sound Effect (HD).mp3", false, 70, 1);
}}
}

}


};gdjs.Untitled_32scene2Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bellhop"), gdjs.Untitled_32scene2Code.GDBellhopObjects2);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDBellhopObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDBellhopObjects2[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDBellhopObjects2[k] = gdjs.Untitled_32scene2Code.GDBellhopObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDBellhopObjects2.length = k;}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene2Code.GDBellhopObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.Untitled_32scene2Code.GDLivesObjects2);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDLivesObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDLivesObjects2[i].setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.Untitled_32scene2Code.GDBellhopObjects2.length === 0 ) ? 0 :gdjs.Untitled_32scene2Code.GDBellhopObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects2[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bellhop"), gdjs.Untitled_32scene2Code.GDBellhopObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDBellhopObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDBellhopObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDBellhopObjects1[k] = gdjs.Untitled_32scene2Code.GDBellhopObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDBellhopObjects1.length = k;}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene2Code.GDBellhopObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Buttontryagain"), gdjs.Untitled_32scene2Code.GDButtontryagainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Easy"), gdjs.Untitled_32scene2Code.GDEasyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gameover"), gdjs.Untitled_32scene2Code.GDGameoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.Untitled_32scene2Code.GDHighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.Untitled_32scene2Code.GDLivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("damage1"), gdjs.Untitled_32scene2Code.GDdamage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("damage2"), gdjs.Untitled_32scene2Code.GDdamage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("damage3"), gdjs.Untitled_32scene2Code.GDdamage3Objects1);
gdjs.copyArray(runtimeScene.getObjects("luggage1"), gdjs.Untitled_32scene2Code.GDluggage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("luggage2"), gdjs.Untitled_32scene2Code.GDluggage2Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDLivesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDLivesObjects1[i].setAnimationName("Life0");
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDBellhopObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDBellhopObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDGameoverObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDGameoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtontryagainObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtontryagainObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDEasyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDEasyObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDHighscoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDHighscoreObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDluggage2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDluggage2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32scene2Code.GDdamage3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDdamage3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDButtontryagainObjects2Objects = Hashtable.newFrom({"Buttontryagain": gdjs.Untitled_32scene2Code.GDButtontryagainObjects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDButtontryagainObjects2Objects = Hashtable.newFrom({"Buttontryagain": gdjs.Untitled_32scene2Code.GDButtontryagainObjects2});
gdjs.Untitled_32scene2Code.eventsList13 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Untitled_32scene2Code.GDButtontryagainObjects2, gdjs.Untitled_32scene2Code.GDButtontryagainObjects3);

{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtontryagainObjects3.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtontryagainObjects3[i].setAnimationName("Buttonpressed");
}
}}

}


{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


};gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDButtonMainMenuObjects2Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDButtonMainMenuObjects1Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1});
gdjs.Untitled_32scene2Code.eventsList14 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1, gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2);

{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuPressed");
}
}}

}


{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene1", false);
}}

}


};gdjs.Untitled_32scene2Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Buttontryagain"), gdjs.Untitled_32scene2Code.GDButtontryagainObjects2);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDButtontryagainObjects2Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene2Code.GDButtontryagainObjects2 */
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtontryagainObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtontryagainObjects2[i].setAnimationName("Buttonnormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buttontryagain"), gdjs.Untitled_32scene2Code.GDButtontryagainObjects2);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDButtontryagainObjects2Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene2Code.GDButtontryagainObjects2 */
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtontryagainObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtontryagainObjects2[i].setAnimationName("Buttonhover");
}
}
{ //Subevents
gdjs.Untitled_32scene2Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDButtonMainMenuObjects2Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2 */
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDButtonMainMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1[i].setAnimationName("MainMenuHover");
}
}
{ //Subevents
gdjs.Untitled_32scene2Code.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32scene2Code.eventsList16 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().get("GameSpeed").add(6 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


};gdjs.Untitled_32scene2Code.eventsList17 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Buttontryagain"), gdjs.Untitled_32scene2Code.GDButtontryagainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Easy"), gdjs.Untitled_32scene2Code.GDEasyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gameover"), gdjs.Untitled_32scene2Code.GDGameoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Highscore"), gdjs.Untitled_32scene2Code.GDHighscoreObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Game sound.mp3", 1, true, 50, 1);
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDGameoverObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDGameoverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtontryagainObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtontryagainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDEasyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDEasyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDHighscoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDHighscoreObjects1[i].hide();
}
}}

}


{


gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList2(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList5(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList7(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList9(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList11(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList12(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList15(runtimeScene);
}


{


gdjs.Untitled_32scene2Code.eventsList16(runtimeScene);
}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDSkyObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDSkyObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDSkyObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDSkyObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDHotelObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDHotelObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDHotelObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDHotelObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDBellhopObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDBellhopObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDBellhopObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDBellhopObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDluggage1Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDluggage1Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDluggage1Objects3.length = 0;
gdjs.Untitled_32scene2Code.GDluggage1Objects4.length = 0;
gdjs.Untitled_32scene2Code.GDluggage2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDluggage2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDluggage2Objects3.length = 0;
gdjs.Untitled_32scene2Code.GDluggage2Objects4.length = 0;
gdjs.Untitled_32scene2Code.GDScoreObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDScoreObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDScoreObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDScoreObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDdamage1Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDdamage1Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDdamage1Objects3.length = 0;
gdjs.Untitled_32scene2Code.GDdamage1Objects4.length = 0;
gdjs.Untitled_32scene2Code.GDdamage2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDdamage2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDdamage2Objects3.length = 0;
gdjs.Untitled_32scene2Code.GDdamage2Objects4.length = 0;
gdjs.Untitled_32scene2Code.GDdamage3Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDdamage3Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDdamage3Objects3.length = 0;
gdjs.Untitled_32scene2Code.GDdamage3Objects4.length = 0;
gdjs.Untitled_32scene2Code.GDLivesObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDLivesObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDLivesObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDLivesObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDGameoverObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDGameoverObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDGameoverObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDGameoverObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDButtontryagainObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDButtontryagainObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDButtontryagainObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDButtontryagainObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDButtonMainMenuObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDEasyObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDEasyObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDEasyObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDEasyObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDRightarrowObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDRightarrowObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDRightarrowObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDRightarrowObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDLeftarrowObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDLeftarrowObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDLeftarrowObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDLeftarrowObjects4.length = 0;
gdjs.Untitled_32scene2Code.GDHighscoreObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDHighscoreObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDHighscoreObjects3.length = 0;
gdjs.Untitled_32scene2Code.GDHighscoreObjects4.length = 0;

gdjs.Untitled_32scene2Code.eventsList17(runtimeScene);
return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
