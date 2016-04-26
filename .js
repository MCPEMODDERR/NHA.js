function godmodev2(){
function attackHook(a,v){
var v = Player.getEntity();
if(v==Player.getEntity()){ 
if(god==true){
Player.setHealth(60);
}
}
}
}
 
 
 function selectLevelHook(){
print("_____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ _____________________________________________ ");
}
 ModPE.langEdit("menu.copyright"," §eNo§6Hacks§3Allowed §8v§11 §4off§ahost §l§9modmenu");
ModPE.langEdit("menu.splash","§4off§ahost §kl");
ModPE.langEdit("menu.play","§1Nha §aoff§6host§0!");
ModPE.langEdit("menu.options","§4Settings");
ModPE.langEdit("menu.skins","§4Skins");
ModPE.langEdit("playscreen.header.local","§4________________________________________________");
ModPE.langEdit("skins.title","§4Skins");
ModPE.langEdit("options.title","§4Settings");
ModPE.langEdit("deathScreen.message","§4Nha haha");
ModPE.langEdit("playscreen.new","§4New");
ModPE.langEdit("playscreen.quit","§4Back");
ModPE.langEdit("skins.restore.button","§4Restore");
ModPE.langEdit("createWorldScreen.advanced","§4Advanced");
ModPE.langEdit("externalServerScreen.addServer","§4Add Server");
ModPE.langEdit("multiplayer.player.joined","§4%s joined the game");
ModPE.langEdit("multiplayer.player.left","§4%s left the game");
ModPE.langEdit("deathScreen.quit","§9Main Menu");
ModPE.langEdit("deathScreen.respawn","§4Respawn");
ModPE.langEdit("pauseScreen.quit","§4Main Menu");
ModPE.langEdit("pauseScreen.options","§4Settings");
ModPE.langEdit("pauseScreen.back","§4Back to game");
ModPE.langEdit("menu.returnToGame","§4Back to game");
ModPE.langEdit("death.attack.mob","§4%1$s was slain by %2$s");
ModPE.langEdit("death.attack.fall","§4%1$s hit the ground too hard");
ModPE.langEdit("death.attack.explosion","§4%1$s blew up");
ModPE.langEdit("death.attack.arrow","§4%1$s was shot by %2$s");
ModPE.langEdit("death.attack.drown","§4%1$s drowned");
ModPE.langEdit("death.fell.accident.generic","§4%1$s fell from a high place");
ModPE.langEdit("death.attack.outOfWorld","§4%1$s fell out of the world");
ModPE.langEdit("death.attack.onFire","§4%1$s burned to death");
ModPE.langEdit("death.attack.magic","§4%1$s was killed by magic");
ModPE.langEdit("death.attack.inWall","§4%1$s suffocated in a wall");
ModPE.langEdit("death.attack.lava","§4%1$s tried to swim in lava");
ModPE.langEdit("death.attack.inFire","§4%1$s went up in flames");
ModPE.langEdit("death.attack.cactus","§4%1$s was pricked to death");
ModPE.langEdit("commands.op.success","§4Opped %s");
ModPE.langEdit("commands.banip.success","§4Banned IP address §l%s");
ModPE.langEdit("commands.banip.success.players","§rBanned IP address §l%s §rbelonging to %s");
ModPE.langEdit("chatScreen.hide","§4Hide");
  
 
ModPE.log("14");
Hbutton();
CiffL2();
CiffL1();
CiffL();
sjbutton();
print("mcpe "+ ModPE.getMinecraftVersion()+" said that u are awesome");
 
var hun = false;
var god = false;
var VER = 14;
var numbers = android.text.InputType.TYPE_CLASS_NUMBER;
var number = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED;
var textview;
var GUI;
var RenderLayer = 1;
var OpaqLayer  = 0;
//argb \/
var menu;
var mbbb = false;
var mbba = false;
var mbbc = false;
var BtnOn = true;
var flyon = false;
var un = false;
// a r g b |
var GUIColor = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140,0,0,0));
//defalt black
 
var GUIColor1 =  new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0)); 
//transparent
 
var GUIColor2 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140,0,0,0)); 
//black
 
var GUIColor3 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140,140,140,140)); 
//white
 
var GUIColor4 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,125,0,0));
//red
 
var GUIColor5 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,0,125));
//blue
 
var GUIColor6 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,80,80,80));
// light grey
 
 
var GUIColor7 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,50,50,50));
//grey
 
var GUIColor8 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,12,30,10));
//yellow maybe
 
 
var GUIColor9 = "android.graphics.Color.CYAN"
 
 
var GUIColor10 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,30,30,30));
//dark grey
 
var GUIColor11 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,125,0));
//green
 
var GUIColor12 = android.graphics.Color.MAGENTA;
 
var GUIName = android.graphics.Color.WHITE;
 
var currentColour = "black";
 
GUIColor99 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,120,0,82));
//pink
 
///////stolen haha
var Gravity = android.view.Gravity;
var GUIPos1 = Gravity.CENTER;
var GUIPos = Gravity.RIGHT;
var GUIcen = Gravity.CENTER;
var GUIright = Gravity.RIGHT;
var GUIleft = Gravity.LEFT;
///////
 
var sethome;
var instantkill = false;
var instantbreak = false;
var unlimitedArrow = false;
var bd = false;
var defaultDestroyTime = [
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
]
 
function XRON(){
Block.setRenderLayer(1, RenderLayer);
Block.setRenderLayer(2,RenderLayer);
Block.setRenderLayer(3,RenderLayer);
Block.setRenderLayer(4,RenderLayer);
Block.setRenderLayer(5,RenderLayer);
Block.setRenderLayer(6,RenderLayer);
Block.setRenderLayer(7,RenderLayer);
Block.setRenderLayer(8,RenderLayer);
Block.setRenderLayer(9,RenderLayer);
Block.setRenderLayer(10,RenderLayer);
Block.setRenderLayer(11,RenderLayer);
Block.setRenderLayer(12,RenderLayer);
Block.setRenderLayer(13,RenderLayer);
Block.setRenderLayer(17,RenderLayer);
Block.setRenderLayer(18,RenderLayer);
Block.setRenderLayer(19,RenderLayer);
Block.setRenderLayer(20,RenderLayer);
Block.setRenderLayer(22,RenderLayer);
Block.setRenderLayer(23,RenderLayer);
Block.setRenderLayer(24,RenderLayer);
Block.setRenderLayer(25,RenderLayer);
Block.setRenderLayer(26,RenderLayer);
Block.setRenderLayer(27,RenderLayer);
Block.setRenderLayer(28,RenderLayer);
Block.setRenderLayer(29,RenderLayer);
Block.setRenderLayer(30,RenderLayer);
Block.setRenderLayer(31,RenderLayer);
Block.setRenderLayer(32,RenderLayer);
Block.setRenderLayer(33,RenderLayer);
Block.setRenderLayer(34,RenderLayer);
Block.setRenderLayer(35,RenderLayer);
Block.setRenderLayer(36,RenderLayer);
Block.setRenderLayer(37,RenderLayer);
Block.setRenderLayer(38,RenderLayer);
Block.setRenderLayer(39,RenderLayer);
Block.setRenderLayer(40,RenderLayer);
Block.setRenderLayer(41,RenderLayer);
Block.setRenderLayer(42,RenderLayer);
Block.setRenderLayer(43,RenderLayer);
Block.setRenderLayer(44,RenderLayer);
Block.setRenderLayer(45,RenderLayer);
Block.setRenderLayer(46,RenderLayer);
Block.setRenderLayer(47,RenderLayer);
Block.setRenderLayer(48,RenderLayer);
Block.setRenderLayer(49,RenderLayer);
Block.setRenderLayer(50,RenderLayer);
Block.setRenderLayer(51,RenderLayer);
Block.setRenderLayer(52,RenderLayer);
Block.setRenderLayer(53,RenderLayer);
Block.setRenderLayer(54,RenderLayer);
Block.setRenderLayer(55,RenderLayer);
Block.setRenderLayer(57,RenderLayer);
Block.setRenderLayer(58,RenderLayer);
Block.setRenderLayer(59,RenderLayer);
Block.setRenderLayer(60,RenderLayer);
Block.setRenderLayer(61,RenderLayer);
Block.setRenderLayer(62,RenderLayer);
Block.setRenderLayer(63,RenderLayer);
Block.setRenderLayer(64,RenderLayer);
Block.setRenderLayer(65,RenderLayer);
Block.setRenderLayer(66,RenderLayer);
Block.setRenderLayer(67,RenderLayer);
Block.setRenderLayer(68,RenderLayer);
Block.setRenderLayer(69,RenderLayer);
Block.setRenderLayer(70,RenderLayer);
Block.setRenderLayer(71,RenderLayer);
Block.setRenderLayer(72,RenderLayer);
Block.setRenderLayer(75,RenderLayer);
Block.setRenderLayer(76,RenderLayer);
Block.setRenderLayer(77,RenderLayer);
Block.setRenderLayer(78,RenderLayer);
Block.setRenderLayer(79,RenderLayer);
Block.setRenderLayer(80,RenderLayer);
Block.setRenderLayer(81,RenderLayer);
Block.setRenderLayer(82,RenderLayer);
Block.setRenderLayer(83,RenderLayer);
Block.setRenderLayer(84,RenderLayer);
Block.setRenderLayer(85,RenderLayer);
Block.setRenderLayer(86,RenderLayer);
Block.setRenderLayer(87,RenderLayer);
Block.setRenderLayer(88,RenderLayer);
Block.setRenderLayer(89,RenderLayer);
Block.setRenderLayer(90,RenderLayer);
Block.setRenderLayer(91,RenderLayer);
Block.setRenderLayer(92,RenderLayer);
Block.setRenderLayer(93,RenderLayer);
Block.setRenderLayer(94,RenderLayer);
Block.setRenderLayer(95,RenderLayer);
Block.setRenderLayer(96,RenderLayer);
Block.setRenderLayer(97,RenderLayer);
Block.setRenderLayer(98,RenderLayer);
Block.setRenderLayer(99,RenderLayer);
Block.setRenderLayer(100,RenderLayer);
Block.setRenderLayer(101,RenderLayer);
Block.setRenderLayer(102,RenderLayer);
Block.setRenderLayer(103,RenderLayer);
Block.setRenderLayer(104,RenderLayer);
Block.setRenderLayer(105,RenderLayer);
Block.setRenderLayer(106,RenderLayer);
Block.setRenderLayer(107,RenderLayer);
Block.setRenderLayer(108,RenderLayer);
Block.setRenderLayer(109,RenderLayer);
Block.setRenderLayer(110,RenderLayer);
Block.setRenderLayer(111,RenderLayer);
Block.setRenderLayer(112,RenderLayer);
Block.setRenderLayer(113,RenderLayer);
Block.setRenderLayer(114,RenderLayer);
Block.setRenderLayer(115,RenderLayer);
Block.setRenderLayer(117,RenderLayer);
Block.setRenderLayer(118,RenderLayer);
Block.setRenderLayer(119,RenderLayer);
Block.setRenderLayer(120,RenderLayer);
Block.setRenderLayer(121,RenderLayer);
Block.setRenderLayer(122,RenderLayer);
Block.setRenderLayer(123,RenderLayer);
Block.setRenderLayer(124,RenderLayer);
Block.setRenderLayer(125,RenderLayer);
Block.setRenderLayer(126,RenderLayer);
Block.setRenderLayer(127,RenderLayer);
Block.setRenderLayer(128,RenderLayer);
Block.setRenderLayer(130,RenderLayer);
Block.setRenderLayer(131,RenderLayer);
Block.setRenderLayer(132,RenderLayer);
Block.setRenderLayer(133,RenderLayer);
Block.setRenderLayer(134,RenderLayer);
Block.setRenderLayer(135,RenderLayer);
Block.setRenderLayer(136,RenderLayer);
Block.setRenderLayer(137,RenderLayer);
Block.setRenderLayer(138,RenderLayer);
Block.setRenderLayer(139,RenderLayer);
Block.setRenderLayer(140,RenderLayer);
Block.setRenderLayer(141,RenderLayer);
Block.setRenderLayer(142,RenderLayer);
Block.setRenderLayer(143,RenderLayer);
Block.setRenderLayer(144,RenderLayer);
Block.setRenderLayer(145,RenderLayer);
Block.setRenderLayer(146,RenderLayer);
Block.setRenderLayer(147,RenderLayer);
Block.setRenderLayer(148,RenderLayer);
Block.setRenderLayer(149,RenderLayer);
Block.setRenderLayer(150,RenderLayer);
Block.setRenderLayer(151,RenderLayer);
Block.setRenderLayer(152,RenderLayer);
Block.setRenderLayer(153,RenderLayer);
Block.setRenderLayer(154,RenderLayer);
Block.setRenderLayer(155,RenderLayer);
Block.setRenderLayer(156,RenderLayer);
Block.setRenderLayer(157,RenderLayer);
Block.setRenderLayer(158,RenderLayer);
Block.setRenderLayer(159,RenderLayer);
Block.setRenderLayer(160,RenderLayer);
Block.setRenderLayer(161,RenderLayer);
Block.setRenderLayer(162,RenderLayer);
Block.setRenderLayer(163,RenderLayer);
Block.setRenderLayer(164,RenderLayer);
Block.setRenderLayer(165,RenderLayer);
Block.setRenderLayer(166,RenderLayer);
Block.setRenderLayer(167,RenderLayer);
Block.setRenderLayer(168,RenderLayer);
Block.setRenderLayer(169,RenderLayer);
Block.setRenderLayer(170,RenderLayer);
Block.setRenderLayer(171,RenderLayer);
Block.setRenderLayer(172,RenderLayer);
Block.setRenderLayer(173,RenderLayer);
Block.setRenderLayer(174,RenderLayer);
Block.setRenderLayer(175,RenderLayer);
Block.setRenderLayer(176,RenderLayer);
Block.setRenderLayer(177,RenderLayer);
Block.setRenderLayer(178,RenderLayer);
Block.setRenderLayer(179,RenderLayer);
Block.setRenderLayer(180,RenderLayer);
Block.setRenderLayer(181,RenderLayer);
Block.setRenderLayer(182,RenderLayer);
Block.setRenderLayer(183,RenderLayer);
Block.setRenderLayer(184,RenderLayer);
Block.setRenderLayer(185,RenderLayer);
Block.setRenderLayer(186,RenderLayer);
Block.setRenderLayer(187,RenderLayer);
Block.setRenderLayer(188,RenderLayer);
Block.setRenderLayer(189,RenderLayer);
Block.setRenderLayer(190,RenderLayer);
Block.setRenderLayer(191,RenderLayer);
Block.setRenderLayer(192,RenderLayer);
Block.setRenderLayer(193,RenderLayer);
Block.setRenderLayer(194,RenderLayer);
Block.setRenderLayer(195,RenderLayer);
Block.setRenderLayer(196,RenderLayer);
Block.setRenderLayer(197,RenderLayer);
Block.setRenderLayer(198,RenderLayer);
Block.setRenderLayer(199,RenderLayer);
Block.setRenderLayer(200,RenderLayer);
Block.setRenderLayer(201,RenderLayer);
Block.setRenderLayer(202,RenderLayer);
Block.setRenderLayer(203,RenderLayer);
Block.setRenderLayer(204,RenderLayer);
Block.setRenderLayer(205,RenderLayer);
Block.setRenderLayer(206,RenderLayer);
Block.setRenderLayer(207,RenderLayer);
Block.setRenderLayer(208,RenderLayer);
Block.setRenderLayer(209,RenderLayer);
Block.setRenderLayer(210,RenderLayer);
Block.setRenderLayer(211,RenderLayer);
Block.setRenderLayer(212,RenderLayer);
Block.setRenderLayer(213,RenderLayer);
Block.setRenderLayer(214,RenderLayer);
Block.setRenderLayer(215,RenderLayer);
Block.setRenderLayer(217,RenderLayer);
Block.setRenderLayer(218,RenderLayer);
Block.setRenderLayer(219,RenderLayer);
Block.setRenderLayer(220,RenderLayer);
Block.setRenderLayer(221,RenderLayer);
Block.setRenderLayer(222,RenderLayer);
Block.setRenderLayer(223,RenderLayer);
Block.setRenderLayer(224,RenderLayer);
Block.setRenderLayer(225,RenderLayer);
Block.setRenderLayer(226,RenderLayer);
Block.setRenderLayer(227,RenderLayer);
Block.setRenderLayer(228,RenderLayer);
Block.setRenderLayer(229,RenderLayer);
Block.setRenderLayer(230,RenderLayer);
Block.setRenderLayer(231,RenderLayer);
Block.setRenderLayer(232,RenderLayer);
Block.setRenderLayer(233,RenderLayer);
Block.setRenderLayer(234,RenderLayer);
Block.setRenderLayer(235,RenderLayer);
Block.setRenderLayer(236,RenderLayer);
Block.setRenderLayer(237,RenderLayer);
Block.setRenderLayer(238,RenderLayer);
Block.setRenderLayer(239,RenderLayer);
Block.setRenderLayer(240,RenderLayer);
Block.setRenderLayer(241,RenderLayer);
Block.setRenderLayer(242,RenderLayer);
Block.setRenderLayer(243,RenderLayer);
Block.setRenderLayer(244,RenderLayer);
Block.setRenderLayer(245,RenderLayer);
Block.setRenderLayer(246,RenderLayer);
Block.setRenderLayer(247,RenderLayer);
Block.setRenderLayer(248,RenderLayer);
Block.setRenderLayer(249,RenderLayer);
Block.setRenderLayer(250,RenderLayer);
Block.setRenderLayer(251,RenderLayer);
Block.setRenderLayer(252,RenderLayer);
Block.setRenderLayer(253,RenderLayer);
Block.setRenderLayer(254,RenderLayer);
Block.setRenderLayer(255,RenderLayer);
}
 
function XROFF(){
Block.setRenderLayer(1,OpaqLayer);
Block.setRenderLayer(2,OpaqLayer);
Block.setRenderLayer(3,OpaqLayer);
Block.setRenderLayer(4,OpaqLayer);
Block.setRenderLayer(5,OpaqLayer);
Block.setRenderLayer(6,OpaqLayer);
Block.setRenderLayer(7,OpaqLayer);
Block.setRenderLayer(8,OpaqLayer);
Block.setRenderLayer(9,OpaqLayer);
Block.setRenderLayer(10,OpaqLayer);
Block.setRenderLayer(11,OpaqLayer);
Block.setRenderLayer(12,OpaqLayer);
Block.setRenderLayer(13,OpaqLayer);
Block.setRenderLayer(14,OpaqLayer);
Block.setRenderLayer(15,OpaqLayer);
Block.setRenderLayer(17,OpaqLayer);
Block.setRenderLayer(18, OpaqLayer);
 
Block.setRenderLayer(19,OpaqLayer);
Block.setRenderLayer(20,OpaqLayer);
Block.setRenderLayer(21,OpaqLayer);
Block.setRenderLayer(22,OpaqLayer);
Block.setRenderLayer(23,OpaqLayer);
Block.setRenderLayer(24,OpaqLayer);
Block.setRenderLayer(25,OpaqLayer);
Block.setRenderLayer(26,OpaqLayer);
Block.setRenderLayer(27,OpaqLayer);
Block.setRenderLayer(28,OpaqLayer);
Block.setRenderLayer(29,OpaqLayer);
Block.setRenderLayer(30,OpaqLayer);
Block.setRenderLayer(31,OpaqLayer);
Block.setRenderLayer(32,OpaqLayer);
Block.setRenderLayer(33,OpaqLayer);
Block.setRenderLayer(34,OpaqLayer);
Block.setRenderLayer(35,OpaqLayer);
Block.setRenderLayer(36,OpaqLayer);
Block.setRenderLayer(37,OpaqLayer);
Block.setRenderLayer(38,OpaqLayer);
Block.setRenderLayer(39,OpaqLayer);
Block.setRenderLayer(40,OpaqLayer);
Block.setRenderLayer(41,OpaqLayer);
Block.setRenderLayer(42,OpaqLayer);
Block.setRenderLayer(43,OpaqLayer);
Block.setRenderLayer(44,OpaqLayer);
Block.setRenderLayer(45,OpaqLayer);
Block.setRenderLayer(46,OpaqLayer);
Block.setRenderLayer(47,OpaqLayer);
Block.setRenderLayer(48,OpaqLayer);
Block.setRenderLayer(49,OpaqLayer);
Block.setRenderLayer(50,OpaqLayer);
Block.setRenderLayer(51,OpaqLayer);
Block.setRenderLayer(52,OpaqLayer);
Block.setRenderLayer(53,OpaqLayer);
Block.setRenderLayer(54,OpaqLayer);
Block.setRenderLayer(55,OpaqLayer);
Block.setRenderLayer(56,OpaqLayer);
Block.setRenderLayer(57,OpaqLayer);
Block.setRenderLayer(58,OpaqLayer);
Block.setRenderLayer(59,OpaqLayer);
Block.setRenderLayer(60,OpaqLayer);
Block.setRenderLayer(61,OpaqLayer);
Block.setRenderLayer(62,OpaqLayer);
Block.setRenderLayer(63,OpaqLayer);
Block.setRenderLayer(64,OpaqLayer);
Block.setRenderLayer(65,OpaqLayer);
Block.setRenderLayer(66,OpaqLayer);
Block.setRenderLayer(67,OpaqLayer);
Block.setRenderLayer(68,OpaqLayer);
Block.setRenderLayer(69,OpaqLayer);
Block.setRenderLayer(70,OpaqLayer);
Block.setRenderLayer(71,OpaqLayer);
Block.setRenderLayer(72,OpaqLayer);
Block.setRenderLayer(73,OpaqLayer);
Block.setRenderLayer(74,OpaqLayer);
Block.setRenderLayer(75,OpaqLayer);
Block.setRenderLayer(76,OpaqLayer);
Block.setRenderLayer(77,OpaqLayer);
Block.setRenderLayer(78,OpaqLayer);
Block.setRenderLayer(79,OpaqLayer);
Block.setRenderLayer(80,OpaqLayer);
Block.setRenderLayer(81,OpaqLayer);
Block.setRenderLayer(82,OpaqLayer);
Block.setRenderLayer(83,OpaqLayer);
Block.setRenderLayer(84,OpaqLayer);
Block.setRenderLayer(85,OpaqLayer);
Block.setRenderLayer(86,OpaqLayer);
Block.setRenderLayer(87,OpaqLayer);
Block.setRenderLayer(88,OpaqLayer);
Block.setRenderLayer(89,OpaqLayer);
Block.setRenderLayer(90,OpaqLayer);
Block.setRenderLayer(91,OpaqLayer);
Block.setRenderLayer(92,OpaqLayer);
Block.setRenderLayer(93,OpaqLayer);
Block.setRenderLayer(94,OpaqLayer);
Block.setRenderLayer(95,OpaqLayer);
Block.setRenderLayer(96,OpaqLayer);
Block.setRenderLayer(97,OpaqLayer);
Block.setRenderLayer(98,OpaqLayer);
Block.setRenderLayer(99,OpaqLayer);
Block.setRenderLayer(100,OpaqLayer);
Block.setRenderLayer(101,OpaqLayer);
Block.setRenderLayer(102,OpaqLayer);
Block.setRenderLayer(103,OpaqLayer);
Block.setRenderLayer(104,OpaqLayer);
Block.setRenderLayer(105,OpaqLayer);
Block.setRenderLayer(106,OpaqLayer);
Block.setRenderLayer(107,OpaqLayer);
Block.setRenderLayer(108,OpaqLayer);
Block.setRenderLayer(109,OpaqLayer);
Block.setRenderLayer(110,OpaqLayer);
Block.setRenderLayer(111,OpaqLayer);
Block.setRenderLayer(112,OpaqLayer);
Block.setRenderLayer(113,OpaqLayer);
Block.setRenderLayer(114,OpaqLayer);
Block.setRenderLayer(115,OpaqLayer);
Block.setRenderLayer(117,OpaqLayer);
Block.setRenderLayer(118,OpaqLayer);
Block.setRenderLayer(119,OpaqLayer);
Block.setRenderLayer(120,OpaqLayer);
Block.setRenderLayer(121,OpaqLayer);
Block.setRenderLayer(122,OpaqLayer);
Block.setRenderLayer(123,OpaqLayer);
Block.setRenderLayer(124,OpaqLayer);
Block.setRenderLayer(125,OpaqLayer);
Block.setRenderLayer(126,OpaqLayer);
Block.setRenderLayer(127,OpaqLayer);
Block.setRenderLayer(128,OpaqLayer);
Block.setRenderLayer(129,OpaqLayer);
Block.setRenderLayer(130,OpaqLayer);
Block.setRenderLayer(131,OpaqLayer);
Block.setRenderLayer(132,OpaqLayer);
Block.setRenderLayer(133,OpaqLayer);
Block.setRenderLayer(134,OpaqLayer);
Block.setRenderLayer(135,OpaqLayer);
Block.setRenderLayer(136,OpaqLayer);
Block.setRenderLayer(137,OpaqLayer);
Block.setRenderLayer(138,OpaqLayer);
Block.setRenderLayer(139,OpaqLayer);
Block.setRenderLayer(140,OpaqLayer);
Block.setRenderLayer(141,OpaqLayer);
Block.setRenderLayer(142,OpaqLayer);
Block.setRenderLayer(143,OpaqLayer);
Block.setRenderLayer(144,OpaqLayer);
Block.setRenderLayer(145,OpaqLayer);
Block.setRenderLayer(146,OpaqLayer);
Block.setRenderLayer(147,OpaqLayer);
Block.setRenderLayer(148,OpaqLayer);
Block.setRenderLayer(149,OpaqLayer);
Block.setRenderLayer(150,OpaqLayer);
Block.setRenderLayer(151,OpaqLayer);
Block.setRenderLayer(152,OpaqLayer);
Block.setRenderLayer(153,OpaqLayer);
Block.setRenderLayer(154,OpaqLayer);
Block.setRenderLayer(155,OpaqLayer);
Block.setRenderLayer(156,OpaqLayer);
Block.setRenderLayer(157,OpaqLayer);
Block.setRenderLayer(158,OpaqLayer);
Block.setRenderLayer(159,OpaqLayer);
Block.setRenderLayer(160,OpaqLayer);
Block.setRenderLayer(161,OpaqLayer);
Block.setRenderLayer(162,OpaqLayer);
Block.setRenderLayer(163,OpaqLayer);
Block.setRenderLayer(164,OpaqLayer);
Block.setRenderLayer(165,OpaqLayer);
Block.setRenderLayer(166,OpaqLayer);
Block.setRenderLayer(167,OpaqLayer);
Block.setRenderLayer(168,OpaqLayer);
Block.setRenderLayer(169,OpaqLayer);
Block.setRenderLayer(170,OpaqLayer);
Block.setRenderLayer(171,OpaqLayer);
Block.setRenderLayer(172,OpaqLayer);
Block.setRenderLayer(173,OpaqLayer);
Block.setRenderLayer(174,OpaqLayer);
Block.setRenderLayer(175,OpaqLayer);
Block.setRenderLayer(176,OpaqLayer);
Block.setRenderLayer(177,OpaqLayer);
Block.setRenderLayer(178,OpaqLayer);
Block.setRenderLayer(179,OpaqLayer);
Block.setRenderLayer(180,OpaqLayer);
Block.setRenderLayer(181,OpaqLayer);
Block.setRenderLayer(182,OpaqLayer);
Block.setRenderLayer(183,OpaqLayer);
Block.setRenderLayer(184,OpaqLayer);
Block.setRenderLayer(185,OpaqLayer);
Block.setRenderLayer(186,OpaqLayer);
Block.setRenderLayer(187,OpaqLayer);
Block.setRenderLayer(188,OpaqLayer);
Block.setRenderLayer(189,OpaqLayer);
Block.setRenderLayer(190,OpaqLayer);
Block.setRenderLayer(191,OpaqLayer);
Block.setRenderLayer(192,OpaqLayer);
Block.setRenderLayer(193,OpaqLayer);
Block.setRenderLayer(194,OpaqLayer);
Block.setRenderLayer(195,OpaqLayer);
Block.setRenderLayer(196,OpaqLayer);
Block.setRenderLayer(197,OpaqLayer);
Block.setRenderLayer(198,OpaqLayer);
Block.setRenderLayer(199,OpaqLayer);
Block.setRenderLayer(200,OpaqLayer);
Block.setRenderLayer(201,OpaqLayer);
Block.setRenderLayer(202,OpaqLayer);
Block.setRenderLayer(203,OpaqLayer);
Block.setRenderLayer(204,OpaqLayer);
Block.setRenderLayer(205,OpaqLayer);
Block.setRenderLayer(206,OpaqLayer);
Block.setRenderLayer(207,OpaqLayer);
Block.setRenderLayer(208,OpaqLayer);
Block.setRenderLayer(209,OpaqLayer);
Block.setRenderLayer(210,OpaqLayer);
Block.setRenderLayer(211,OpaqLayer);
Block.setRenderLayer(212,OpaqLayer);
Block.setRenderLayer(213,OpaqLayer);
Block.setRenderLayer(214,OpaqLayer);
Block.setRenderLayer(215,OpaqLayer);
Block.setRenderLayer(217,OpaqLayer);
Block.setRenderLayer(218,OpaqLayer);
Block.setRenderLayer(219,OpaqLayer);
Block.setRenderLayer(220,OpaqLayer);
Block.setRenderLayer(221,OpaqLayer);
Block.setRenderLayer(222,OpaqLayer);
Block.setRenderLayer(223,OpaqLayer);
Block.setRenderLayer(224,OpaqLayer);
Block.setRenderLayer(225,OpaqLayer);
Block.setRenderLayer(226,OpaqLayer);
Block.setRenderLayer(227,OpaqLayer);
Block.setRenderLayer(228,OpaqLayer);
Block.setRenderLayer(229,OpaqLayer);
Block.setRenderLayer(230,OpaqLayer);
Block.setRenderLayer(231,OpaqLayer);
Block.setRenderLayer(232,OpaqLayer);
Block.setRenderLayer(233,OpaqLayer);
Block.setRenderLayer(234,OpaqLayer);
Block.setRenderLayer(235,OpaqLayer);
Block.setRenderLayer(236,OpaqLayer);
Block.setRenderLayer(237,OpaqLayer);
Block.setRenderLayer(238,OpaqLayer);
Block.setRenderLayer(239,OpaqLayer);
Block.setRenderLayer(240,OpaqLayer);
Block.setRenderLayer(241,OpaqLayer);
Block.setRenderLayer(242,OpaqLayer);
Block.setRenderLayer(243,OpaqLayer);
 Block.setRenderLayer(244,OpaqLayer);
 Block.setRenderLayer(245,OpaqLayer); 
Block.setRenderLayer(246,OpaqLayer);
 Block.setRenderLayer(247,OpaqLayer); 
Block.setRenderLayer(248,OpaqLayer);
 Block.setRenderLayer(249,OpaqLayer);
 Block.setRenderLayer(250,OpaqLayer);
 Block.setRenderLayer(251,OpaqLayer);
  Block.setRenderLayer(252,OpaqLayer);   
Block.setRenderLayer(253,OpaqLayer);
   Block.setRenderLayer(254,OpaqLayer);
    Block.setRenderLayer(255,OpaqLayer);
}
 
 
/////////////////////////////////////////////////////////////////////
 
function S1(){
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.chestopen", 1, 1);
}
 
function S11(){
   Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.chestclosed", 1, 1);
                     }
 
function S3(){
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop2", 1, 1);
                     }
 
function S4(){
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
                     }
 
function S5(){
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.burp", 1, 1);
                     }
 
 
function timeDia(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var timeLayout = new android.widget.LinearLayout(ctx);
 
timeLayout.setGravity(android.view.Gravity.CENTER);
timeLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
var timeBtn = android.widget.TextView(ctx);
var dayBtn = android.widget.Button(ctx);
var nightBtn = android.widget.Button(ctx);
var cBtn = android.widget.Button(ctx);
timeBtn.setText(" Nha v"+VER+":  time editor");
timeBtn.setTextSize(15);
dayBtn.setText("Day");
nightBtn.setText("Night");
cBtn.setText("Cancel");
var timeDialog = new android.app.Dialog(ctx);
timeDialog.show();
timeDialog.setContentView(timeLayout);
timeDialog.setTitle("Time set");
 
timeLayout.addView(timeBtn);
timeLayout.addView(dayBtn);
timeLayout.addView(nightBtn);
timeLayout.addView(cBtn);
 
dayBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
            Level.setTime(0);
            timeDialog.dismiss();
}});
 
nightBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
       timeDialog.dismiss();
        Level.setTime(14000);
}});
 
cBtn.setOnClickListener(new  android.view.View.OnClickListener(){
 
onClick: function(viewarg){
           timeDialog.dismiss();
}});
 
} catch(errr) {
}
}}));
}
 
function tmiD(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var txtId = android.widget.TextView(ctx);
txtId.setText(" Item Id:");
txtId.setTextSize(12);
var txtAmount = android.widget.TextView(ctx);
txtAmount.setText(" Item Amount:");
txtAmount.setTextSize(12);
var txtData = android.widget.TextView(ctx);
txtData.setText(" Item Data:");
txtData.setTextSize(12);
var tmiLayout = new android.widget.LinearLayout(ctx);
var tmiLayout1 = new android.widget.LinearLayout(ctx);
var tmiScroll = android.widget.ScrollView(ctx);
tmiScroll.addView(tmiLayout);
tmiLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout1.addView(tmiScroll);
var tmi = android.widget.Button(ctx);
var id = new android.widget.EditText(ctx);
var amount = new android.widget.EditText(ctx);
var data = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var cancel = new android.widget.Button(ctx);
 tmi.setText("Items"); 
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout1);
tmiDialog.setTitle("Items");
tmiLayout.setGravity(android.view.Gravity.CENTER);
cancel.setText("Cancel");
   add.setText("Add");
id.setHint("Item ID");
id.setText("1");
amount.setHint("Amount");
amount.setText("1")
data.setHint("Data/Damage");
data.setText("0");
id.setInputType(numbers);
amount.setInputType(numbers);
data.setInputType(numbers);
var fullstack = android.widget.Button(ctx);
var currAmount = amount.getText()==1;
fullstack.setText(currAmount?"Fullstack":"One");
 
tmiDialog.show();
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tmiLayout1.setPadding(25);
tmiLayout.addView(txtId);
tmiLayout.addView(id);
tmiLayout.addView(txtAmount);
tmiLayout.addView(amount);
tmiLayout.addView(txtData);
tmiLayout.addView(data);
tmiLayout.addView(fullstack);
tmiLayout.addView(add);
tmiLayout.addView(cancel);
 
fullstack.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
currAmount = !currAmount;
amount.setText(currAmount?"1":"64");
fullstack.setText(currAmount?"Fullstack":"One");
}});
 
 add.setOnClickListener(new android.view.View.OnClickListener(){
 
onClick: function(viewarg){
 
var itemId = parseInt(id.getText());
var iAmount = parseInt(amount.getText());
var iData = parseInt(data.getText());
 
if(itemId == null){
 
itemId = "1";
 
}
 
if(iData == null){
 
iData = "0";
 
}
 
Player.addItemInventory(itemId, iAmount, iData);
 
if(Level.getGameMode() == 1){
 
Entity.setCarriedItem(getPlayerEnt(), itemId, iAmount, iData);
 
}
 
tmiDialog.dismiss();
 
}
 
});
cancel.setOnClickListener (new android.view.View.OnClickListener(){
onClick : function(viewarg){
tmiDialog.dismiss();
}});
}
catch(e) {
 
}}}));
}
 
function teleportation(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var cancelBtn = android.widget.Button(ctx);
cancelBtn.setText("Cancel");
 var tpLayout = new android.widget.LinearLayout(ctx);
var etX = new android.widget.EditText(ctx);
var etY = new android.widget.EditText(ctx);
var etZ = new android.widget.EditText(ctx);
var txtX = android.widget.TextView(ctx);
txtX.setTextSize(12);
txtX.setText(" X:");
var txtY = android.widget.TextView(ctx);
txtY.setTextSize(12);
txtY.setText(" Y:");
var txtZ = android.widget.TextView(ctx);
txtZ.setTextSize(12);
txtZ.setText(" Z:");
var tpBtn = new android.widget.Button(ctx);
tpBtn.setText("Teleport");
 etX.setInputType(number);
etY.setInputType(number);
etZ.setInputType(number);
etX.setText("0");
etY.setText("0");
etZ.setText("0");
etX.setHint("X");
etY.setHint("Y");
etZ.setHint("Z");
var tpDialog = new android.app.Dialog(ctx);
tpDialog.setContentView(tpLayout);
tpDialog.setTitle("Teleport"); tpLayout.setGravity(android.view.Gravity.CENTER);
tpLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tpLayout.addView(txtX);
tpLayout.addView(etX);
tpLayout.addView(txtY);
tpLayout.addView(etY);
tpLayout.addView(txtZ);
tpLayout.addView(etZ);
tpLayout.addView(tpBtn);
tpLayout.addView(cancelBtn);
tpDialog.show();
 tpBtn.setOnClickListener(new android.view.View.OnClickListener(){
 
onClick: function(viewarg){
if((etX.getText()==0 || etY.getText()==0 || etZ.getText()==0) && (etX.getText()!==0 || etY.getText()!== 0 || etZ.getText()!== 0)){
print("Must be different!");
tpDialog.dismiss();
} else {
var tx = parseInt(etX.getText());
var ty = parseInt(etY.getText());
var tz = parseInt(etZ.getText());
 
Entity.setPosition(getPlayerEnt(), tx, ty, tz);
 
tpDialog.dismiss();
}
}
 
});
 
cancelBtn.setOnClickListener(new android.view.View.OnClickListener(){ onClick: function(viewarg){
          sjbutton();
          tpDialog.dismiss();
}});
}catch(err){
        }}}));
}
 
function getXYZ() {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{  
                if(textview != null) {
textview.setText("                NHA"+VER+": " + "X: " + Math.round(Player.getX()) + ", Y: " + Math.round(Player.getY()) + ", Z: " + Math.round(Player.getZ()));
                }
            }catch(e){
                print("Error: "+e);
            }
        }}));
}
 
function CiffL(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var Ciff5 = new android.widget.LinearLayout(ctx);
 
Ciff5.setGravity(android.view.Gravity.CENTER);
Ciff5.setOrientation(android.widget.LinearLayout.VERTICAL);
var Ciff2Btn = android.widget.Button(ctx);
Ciff2Btn.setTextColor(android.graphics.Color.BLUE);
var cBtn = android.widget.Button(ctx);
Ciff2Btn.setText("NoHacksAllowed Stealth Should be installed so you can mod online");
cBtn.setText("Ok"); 
cBtn.setTextColor(android.graphics.Color.BLUE);
var CDialog = new android.app.Dialog(ctx);
CDialog.show();
CDialog.setContentView(Ciff5);
CDialog.setTitle("Welcome To NoHacksAllowed v"+VER+" ");
 
Ciff5.addView(Ciff2Btn);
Ciff5.addView(cBtn);
 
Ciff2Btn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
 
 
                            
}});
 
cBtn.setOnClickListener(new  android.view.View.OnClickListener(){
 
onClick: function(viewarg){
           CDialog.dismiss();
}});
 
} catch(errr) {
}
}}));
}
 
function CiffL1(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var Ciff5 = new android.widget.LinearLayout(ctx);
 
Ciff5.setGravity(android.view.Gravity.CENTER);
Ciff5.setOrientation(android.widget.LinearLayout.VERTICAL);
var Ciff2Btn = android.widget.Button(ctx);
Ciff2Btn.setTextColor(android.graphics.Color.BLUE);
var cBtn = android.widget.Button(ctx);
Ciff2Btn.setText("Found 0 errors in current menu update");
cBtn.setText("Ok"); 
cBtn.setTextColor(android.graphics.Color.BLUE);
var CDialog = new android.app.Dialog(ctx);
CDialog.show();
CDialog.setContentView(Ciff5);
CDialog.setTitle("Welcome To NoHacksAllowed v"+VER+" ");
 
Ciff5.addView(Ciff2Btn);
Ciff5.addView(cBtn);
 
Ciff2Btn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
 
 
                            
}});
 
cBtn.setOnClickListener(new  android.view.View.OnClickListener(){
 
onClick: function(viewarg){
           CDialog.dismiss();
}});
 
} catch(errr) {
}
}}));
}
 
function CiffL2(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var Ciff5 = new android.widget.LinearLayout(ctx);
 
Ciff5.setGravity(android.view.Gravity.CENTER);
Ciff5.setOrientation(android.widget.LinearLayout.VERTICAL);
var Ciff2Btn = android.widget.Button(ctx);
Ciff2Btn.setTextColor(android.graphics.Color.BLUE);
var cBtn = android.widget.Button(ctx);
Ciff2Btn.setText("Never host modded lobbys on survival games or any competitive lobby");
cBtn.setText("Ok"); 
cBtn.setTextColor(android.graphics.Color.BLUE);
var CDialog = new android.app.Dialog(ctx);
CDialog.show();
CDialog.setContentView(Ciff5);
CDialog.setTitle("Welcome To NoHacksAllowed v"+VER+" ");
 
Ciff5.addView(Ciff2Btn);
Ciff5.addView(cBtn);
 
Ciff2Btn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
 
 
                            
}});
 
cBtn.setOnClickListener(new  android.view.View.OnClickListener(){
 
onClick: function(viewarg){
           CDialog.dismiss();
}});
 
} catch(errr) {
}
}}));
}
 
 
 
function modTick(){
    if(un==true){
Level.setTile(getPlayerX(-1),getPlayerY(),getPlayerZ(), 1, 1);
    }
}
 
function destroyBlock(x,y,z){
if(bd == true){
var block = Level.getTile(x, y, z);
Level.setTile(x, y, z, 0);
Level.dropItem(x, y+1, z, 0, block , 64);
   }
}
 
function modTick(){
if(hun==true){
Player.setHunger(60);
}
    if(god==true){
godmodev2();
Player.setHealth(60);
}
if(mbbb==true){
}
if(mbba==true){
}
if(mbbc==true){
}
getXYZ();
    if(unlimitedArrow==true){
ModPE.showTipMessage('§a§lGod On');
Player.setHealth(20);
Level.addParticle(ParticleType.fallingDust, getPlayerX()+0,getPlayerY()-1,getPlayerZ()+0, 0, 0, 0, 1); 
 
 Level.addParticle(ParticleType.fallingDust, getPlayerX()+1,getPlayerY()-1,getPlayerZ()+0, 0, 0, 0, 1); 
Level.addParticle(ParticleType.fallingDust, getPlayerX()-1,getPlayerY()-1,getPlayerZ()+0, 0, 0, 0, 1); 
Level.addParticle(ParticleType.fallingDust, getPlayerX()+0,getPlayerY()-1,getPlayerZ()+1, 0, 0, 0, 1); 
Level.addParticle(ParticleType.fallingDust, getPlayerX()+0,getPlayerY()-1,getPlayerZ()-1, 0, 0, 0, 1); 
Level.addParticle(ParticleType.fallingDust, getPlayerX()+1,getPlayerY()-1,getPlayerZ()+1, 0, 0, 0, 1); 
Level.addParticle(ParticleType.fallingDust, getPlayerX()+1,getPlayerY()-1,getPlayerZ()-1, 0, 0, 0, 1); 
Level.addParticle(ParticleType.fallingDust, getPlayerX()-1,getPlayerY()-1,getPlayerZ()+1, 0, 0, 0, 1); 
Level.addParticle(ParticleType.fallingDust, getPlayerX()-1,getPlayerY()-1,getPlayerZ()-1, 0, 0, 0, 1); 
Level.addParticle(ParticleType.fallingDust, Player.getPointedBlockX()+0, Player.getPointedBlockY()+1, Player.getPointedBlockZ()+0, 0, 0, 0, 1);
Level.addParticle(ParticleType.fallingDust, Player.getPointedBlockX()+0, Player.getPointedBlockY()+1, Player.getPointedBlockZ()+0, 0, 0, 0, 1);
    }
}
 
function attackHook(a, v) {
if(instantkill==true) {
Entity.setHealth(v, 1);
Entity.setFireTicks(v, 3);
   }
}
 
function blocksd(){
if(instantbreak==true){
for (var b = 0; b < 256; b++)
Block.setDestroyTime(b, 0);
} else {
for (var b = 0; b < 256; b++)
Block.setDestroyTime(b, defaultDestroyTime[b]);
}
}
 
function procCmd(cmd){
var cmd = cmd.split(" ");
if(cmd[0] == "tb") {
  if(BtnOn==true) {
hideBtn();
print("Button is hidden");
BtnOn = false;
} else {
sjbutton();
BtnOn = true;
print("Button is now visible");
}
  }
     }
         
function hideBtn(){
   var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
            GUI.dismiss();
       }}));
}
 
function sjbutton(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("⚛");
            menuBtn.setTextSize(20);
            menuBtn.setTextColor(android.graphics.Color.GREEN);
            menuBtn.setWidth(12);
            menuBtn.setHeight(20);
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
hideBtn();
GUI.dismiss();
BackMenu();
mainMenu();
 
S1();
Line1();
clientMessage("menu §aopened");
}
}
            ));
            layout.addView(menuBtn);
 
            GUI = new android.widget.PopupWindow(layout, dip2px(ctx, 31), dip2px(ctx, 31));
            GUI.setWidth(dip2px(ctx, 38));
            GUI.setHeight(dip2px(ctx, 38));
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,66,0,0))); 
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, dip2px(ctx, 300));
               }catch(err){
}
    }}));
}
 
function Hbutton(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("H");
            menuBtn.setTextSize(20);
            menuBtn.setTextColor(android.graphics.Color.GREEN);
            menuBtn.setWidth(12);
            menuBtn.setHeight(20);
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY(),Player.getPointedBlockZ(), 0, 0);
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY()-1,Player.getPointedBlockZ(), 0, 0);
           } }));
            layout.addView(menuBtn);
 
            GUIe = new android.widget.PopupWindow(layout, dip2px(ctx, 31), dip2px(ctx, 31));
            GUIe.setWidth(dip2px(ctx, 38));
            GUIe.setHeight(dip2px(ctx, 38));
            GUIe.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,66,0,0))); 
            GUIe.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, dip2px(ctx, 0));
               }catch(err){
}
    }}));
}
 
function dip2px(ctx, dips){
 return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
 
function newLevel(){
 
Entity.setCape(Player.getEntity(),"obsidian");
    sjbutton();
   clientMessage("§aWelcome §6" + Player.getName(Player.getEntity()) + "§a To §9-NoHacksAllowed V"+VER+"-");
   clientMessage("§aname §6" + Entity.getNameTag(getPlayerEnt())+ "§a!");
clientMessage("§6§lThis client is made for online");
S1();
}
 
function mainMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout = new android.widget.LinearLayout(ctx);
            var menuScroll = new android.widget.ScrollView(ctx);
            var menuLayout1 = new android.widget.LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
 
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);
 
        var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        menuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("Menu Created By Nha");
         stitle.setTextColor(android.graphics.Color.BLUE);
          menuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
menuLayout.addView(textview);
 
tw = android.widget.TextView(ctx);      
 
tw.setTextSize(10);                                                                                  tw.setTextColor(android.graphics.Color.BLUE);
tw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,0,125)));    
tw.setText("players "+ Server.getAllPlayers() +".");           
menuLayout.addView(tw);
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Menu §4Closed");
Backmenu.dismiss();
            menu.dismiss();
                    sjbutton();
Line2();
ModPE.showTipMessage('§l§1menu§4 Closed');
 S11();
}
            }));
            menuLayout.addView(button);
 
     var button9 = new android.widget.Button(ctx);
            button9.setText("ㅏMain Menuㅓ");
            button9.setTextColor(android.graphics.Color.BLUE);
button9.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button9.setWidth(70);
            button9.setHeight(50);            
            button9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss();
 
S3();
MAINMenu();
Line3();
               }
            }));
            menuLayout.addView(button9);
 
   var button9 = new android.widget.Button(ctx);
            button9.setText("ㅏMessage Menuㅓ");
            button9.setTextColor(android.graphics.Color.BLUE);
button9.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button9.setWidth(70);
            button9.setHeight(50);            
            button9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
MessageMenu();
menu.dismiss();
Line3();
S3();
               }
            }));
            menuLayout.addView(button9);
 
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏWallHack Menuㅓ");
            button25.setTextColor(android.graphics.Color.BLUE);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Menu §4Closed");
            menu.dismiss();
                    WallMenu();        
ModPE.showTipMessage('§l§1menu§4 Closed');
Line3();
S11();
               }
            }));
            menuLayout.addView(button25);
 
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏModel Menuㅓ");
            button25.setTextColor(android.graphics.Color.BLUE);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Menu §4Closed");
            menu.dismiss();
                    ModelMenu();        
ModPE.showTipMessage('§l§1menu§4 Closed');
S11();
Line3();
 
               }
            }));
            menuLayout.addView(button25);
 
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏWorld Optionsㅓ");
            button25.setTextColor(android.graphics.Color.BLUE);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Menu §4Closed");
            menu.dismiss();
                    OMenu();        
ModPE.showTipMessage('§l§1menu§4 Closed');
S11();
 
Line3();
               }
            }));
            menuLayout.addView(button25);
 
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏSpecial Thanksㅓ");
            button25.setTextColor(android.graphics.Color.BLUE);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Menu §4Closed");
            menu.dismiss();
                    TMenu();        
ModPE.showTipMessage('§l§1menu§4 Closed');
Line3();
S11();
               }
            }));
            menuLayout.addView(button25);
 
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏServerㅓ");
            button25.setTextColor(android.graphics.Color.BLUE);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Menu §4Closed");
            menu.dismiss();
                    SeMenu();        
ModPE.showTipMessage('§l§1menu§4 Closed');
Line3();
S11();
               }
            }));
            menuLayout.addView(button25);
 
var button = new android.widget.Button(ctx);
            button.setText("ㅏColour menuㅓ");
            button.setTextColor(android.graphics.Color.BLUE);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Menu §4Closed");
            menu.dismiss();
                    colourMenu();
 S11();
ModPE.showTipMessage('§l§1color menu§a opened');
}
            }));
            menuLayout.addView(button);
 
var button = new android.widget.Button(ctx);
            button.setText("ㅏsettings menuㅓ");
            button.setTextColor(android.graphics.Color.BLUE);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("settings Menu §4Closed");
            menu.dismiss();
                    SetMenu();
 S11();
ModPE.showTipMessage('§l§1settings menu§a opened');
}
            }));
            menuLayout.addView(button);
 
textview = android.widget.TextView(ctx);            textview.setText("Speed changer"); 
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 
menuLayout.addView(textview);
 
var sbpProgress = 0;
      var sbp = new android.widget.SeekBar(ctx);
      sbp.setMax(20);
sbp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      sbp.setProgress(sbpProgress);
      sbp.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      sbpProgress=sbp.getProgress();
      if(sbpProgress==0)
      {
clientMessage("§1Speed set normal");
ModPE.setGameSpeed(20);
S3();
      }
      if(sbpProgress==1)
      {
clientMessage("§1Speed set 20");
ModPE.setGameSpeed(20);
S3();
      }
      if(sbpProgress==2)
      {
clientMessage("§1Speed set 40");
ModPE.setGameSpeed(40);
S3();
      }
      if(sbpProgress==3)
      {
 clientMessage("§1Speed set 60");
ModPE.setGameSpeed(60);
S3();
      }
if(sbpProgress==4)
      {
 clientMessage("§1Speed set 80");
ModPE.setGameSpeed(80);
S3();
      }
if(sbpProgress==5)
      {
 clientMessage("§1Speed set 100");
ModPE.setGameSpeed(100);
S3();
      }
if(sbpProgress==6)
      {
 clientMessage("§1Speed set 120");
ModPE.setGameSpeed(120);
S3();
      }
if(sbpProgress==7)
      {
 clientMessage("§1Speed set 140");
ModPE.setGameSpeed(140);
S3();
      }
if(sbpProgress==8)
      {
 clientMessage("§1Speed set 160");
ModPE.setGameSpeed(160);
S3();
      }
if(sbpProgress==9)
      {
 clientMessage("§1Speed set 180");
ModPE.setGameSpeed(180);
S3();
      }
if(sbpProgress==10)
      {
 clientMessage("§1Speed set 200");
ModPE.setGameSpeed(200);
S3();
      }
if(sbpProgress==11)
      {
 clientMessage("§1Speed set 220");
ModPE.setGameSpeed(220);
S3();
      }
if(sbpProgress==12)
      {
 clientMessage("§1Speed set 240");
ModPE.setGameSpeed(240);
S3();
      }
if(sbpProgress==13)
      {
 clientMessage("§1Speed set 260");
ModPE.setGameSpeed(260);
S3();
      }
if(sbpProgress==14)
      {
 clientMessage("§1Speed set 280");
ModPE.setGameSpeed(280);
S3();
      }
if(sbpProgress==15)
      {
 clientMessage("§1Speed set 300");
ModPE.setGameSpeed(300);
S3();
      }
if(sbpProgress==16)
      {
 clientMessage("§1Speed set 320");
ModPE.setGameSpeed(320);
S3();
      }
if(sbpProgress==17)
      {
 clientMessage("§1Speed set 340");
ModPE.setGameSpeed(340);
S3();
      }
if(sbpProgress==18)
      {
 clientMessage("§1Speed set 380");
ModPE.setGameSpeed(380);
S3();
      }
if(sbpProgress==19)
      {
 clientMessage("§1Speed set 400");
ModPE.setGameSpeed(400);
 
S3();
      }
if(sbpProgress==20)
      {
 clientMessage("§1Speed set 423");
ModPE.setGameSpeed(423);
S3();
      }
      }
      });
      menuLayout.addView(sbp);
 
textview = android.widget.TextView(ctx);            textview.setText("How much Bugs are fixed"); 
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 
menuLayout.addView(textview);
 
var bar = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar.setMax(100);
    bar.setProgress(95);
    menuLayout.addView(bar);
 
///////
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Menu §4Closed");
Backmenu.dismiss();
            menu.dismiss();
                    sjbutton();
Line2();
ModPE.showTipMessage('§l§1menu§4 Closed');
 S11();
}
            }));
            menuLayout.addView(button);
 
var buttonS = new android.widget.Button(ctx);
            buttonS.setText("ㅏUpdateㅓ");
            buttonS.setTextColor(android.graphics.Color.GREEN);   
            buttonS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            buttonS.setTextSize(25);           
            buttonS.setWidth(70);
            buttonS.setHeight(50);            
            buttonS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
S3();
android.widget.Toast.makeText(ctx,"Nha",0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/NoHacksAllowed"));
    ctx.startActivity(intentBrowser)       
              }
            }));
            menuLayout.addView(buttonS);
     
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
menuLayout.addView(textview);
         
var sj = new android.widget.TextView(ctx);
             sj.setTextSize(17);
             sj.setText("<{PLEASE DO NOT EDIT}>");
             sj.setTextColor(android.graphics.Color.BLACK);
             menuLayout.addView(sj);
 
                       
                      menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
 
 
///////
 
////////
 
 
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            menu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
ModPE.showTipMessage('§6menu opened');
 
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
/////////////////////////////////
 
 
function ModelMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var ModelmenuLayout = new android.widget.LinearLayout(ctx);
            var ModelmenuScroll = new android.widget.ScrollView(ctx);
            var ModelmenuLayout1 = new android.widget.LinearLayout(ctx);
            ModelmenuLayout.setOrientation(1);
            ModelmenuLayout1.setOrientation(1);
 
            ModelmenuScroll.addView(ModelmenuLayout);
            ModelmenuLayout1.addView(ModelmenuScroll);
 
        var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        ModelmenuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
 
          ModelmenuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
ModelmenuLayout.addView(textview);
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Model Menu §4Closed");
            Modelmenu.dismiss();
                    sjbutton();
Line3();
mainMenu();
ModPE.showTipMessage('§l§1Model menu§4 Closed');
 S11();
 
               }
            }));
            ModelmenuLayout.addView(button);              
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏSet Chickenㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§9chicken");
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.7);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
            Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");
Entity.setVelY(Player.getEntity(), 0.000002);
ModPE.resetFov();
S3();
function modTick(){
Entity.setVelY(Player.getEntity(), 0.000002);
}
               }
            }));
            ModelmenuLayout.addView(button30);
 
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏSet Mooshroomㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§5MooShroom");
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.7);
ModPE.resetFov();
S3();
 
Entity.setRenderType(Player.getEntity(), EntityRenderType.mushroomCow);
            Entity.setMobSkin(Player.getEntity(),"mob/mooshroom.png");
 
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset arrowㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));    
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §aarrow");
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.arrow);
            Entity.setMobSkin(Player.getEntity(),"mob/arrow.png");
 
ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset spiderㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));    
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §4spider");
Entity.setCollisionSize(Player.getEntity(), 0.6, 1.5);
             Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
            Entity.setMobSkin(Player.getEntity(),"mob/spider.tga");
 
ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button31 = new android.widget.Button(ctx);
            button31.setText("ㅏset Cowㅓ");
            button31.setTextColor(android.graphics.Color.BLUE);
button31.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button31.setWidth(70);
            button31.setHeight(50);            
            button31.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §lCow");
Entity.setCollisionSize(Player.getEntity(), 0.9, 0.8);
             Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
            Entity.setMobSkin(Player.getEntity(),"mob/cow.png");
 
 ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button31);
 
var button31 = new android.widget.Button(ctx);
            button31.setText("ㅏset playerㅓ");
            button31.setTextColor(android.graphics.Color.BLUE);
 
button31.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));  
            button31.setWidth(70);
            button31.setHeight(50);            
            button31.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§player");
Entity.setCollisionSize(Player.getEntity(), 0.6, 0.7);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
 
 ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button31);
 
var button35 = new android.widget.Button(ctx);
            button35.setText("ㅏset lightningㅓ");
            button35.setTextColor(android.graphics.Color.BLUE);
button35.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button35.setWidth(70);
            button35.setHeight(50);            
            button35.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§blightning");
Entity.setCollisionSize(Player.getEntity(), 0.1, 0.1);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.lightningBolt);
            Entity.setMobSkin(Player.getEntity(),"mob/lightningBolt.png");
ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button35);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset ghastㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
ModPE.setFov(120);
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§eghast");
Entity.setCollisionSize(Player.getEntity(), 4, 4);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.ghast);
            Entity.setMobSkin(Player.getEntity(),"mob/ghast.png");
S3();
Player.setCanFly(1);
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset Zombieㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§8zombie");
Entity.setCollisionSize(Player.getEntity(), 0.6, 0.8);
            Entity.setRenderType(Player.getEntity(),  EntityRenderType.zombie);
            Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");
ModPE.resetFov();
                                        S3();
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset skeletonㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§3skeleton");
Entity.setCollisionSize(Player.getEntity(), 0.6, 0.8);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
            Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");
ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset skaltonㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§0wither §3skeleton");
Entity.setCollisionSize(Player.getEntity(), 0.6, 0.5);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
            Entity.setMobSkin(Player.getEntity(),"mob/wither_skeleton.png");
ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset Creeperㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§acreeper");
Entity.setCollisionSize(Player.getEntity(), 0.8, 06);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
            Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");
ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset Cameraㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §l§3camera");
Entity.setCollisionSize(Player.getEntity(), 0.9, 0.8);
            Entity.setRenderType(Player.getEntity(), EntityRenderType.camera);
            Entity.setMobSkin(Player.getEntity(),"mob/camera.png");
 
ModPE.resetFov();
S3();
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset ender manㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §1Ender Man");
Entity.setCollisionSize(Player.getEntity(), 1.8, 0.8);
 
Entity.setRenderType(Player.getEntity(), EntityRenderType.enderman);
            Entity.setMobSkin(Player.getEntity(),"mob/enderman.png");
ModPE.resetFov();
S3();
 
               }
            }));
            ModelmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏset Npcㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 clientMessage("§o§6set§1 "+ Player.getName(Player.getEntity())+" §6 to §6villeger");
Entity.setCollisionSize(Player.getEntity(), 1.8, 0.8);
 
 
Entity.setRenderType (Player.getEntity(), EntityRenderType.player);
            Entity.setMobSkin(Player.getEntity(),"mob/villager/smith.png");
 
 S3();
ModPE.resetFov();
               }
            }));
            ModelmenuLayout.addView(button30);
 
            var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Model Menu §4Closed");
Line3();
            Modelmenu.dismiss();
mainMenu();
ModPE.showTipMessage('§l§1Model menu§4 Closed');
S11();
               }
            }));
            ModelmenuLayout.addView(button25);
 
var sj = new android.widget.TextView(ctx);
             sj.setTextSize(17);
             sj.setText("<{PLEASE DO NOT EDIT}>");
sj.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));    
             sj.setTextColor(android.graphics.Color.BLACK);
             ModelmenuLayout.addView(sj);
 
var buttonS = new android.widget.Button(ctx);
            buttonS.setText("ㅏUpdateㅓ");
            buttonS.setTextColor(android.graphics.Color.GREEN);   
            buttonS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            buttonS.setTextSize(25);           
            buttonS.setWidth(70);
            buttonS.setHeight(50);            
            buttonS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
S3();
mainMenu();
                   Line3();
 Modelmenu.dismiss();
android.widget.Toast.makeText(ctx,"Nha",0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/NoHacksAllowed"));
    ctx.startActivity(intentBrowser)       
              }
            }));
            ModelmenuLayout.addView(buttonS);
     
        
 
                       
                      Modelmenu = new android.widget.PopupWindow(ModelmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
Modelmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            Modelmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
ModPE.showTipMessage('§6Modelmenu opened');
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
/////////////////////////////////
 
 
function WallMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var WallmenuLayout = new android.widget.LinearLayout(ctx);
            var WallmenuScroll = new android.widget.ScrollView(ctx);
            var WallmenuLayout1 = new android.widget.LinearLayout(ctx);
            WallmenuLayout.setOrientation(1);
            WallmenuLayout1.setOrientation(1);
 
            WallmenuScroll.addView(WallmenuLayout);
            WallmenuLayout1.addView(WallmenuScroll);
 
        var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        WallmenuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
          WallmenuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
WallmenuLayout.addView(textview);
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Wall Menu §4Closed");
            Wallmenu.dismiss();
                    sjbutton();
 
mainMenu();
ModPE.showTipMessage('§l§1Wall menu§4 Closed');
 S11();
 
 Line3();
               }
            }));
            WallmenuLayout.addView(button);           
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏWall Hack Onㅓ");
            button25.setTextColor(android.graphics.Color.BLUE);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Wall Hack §aOn");
XRON();
S3();
               }
            }));
            WallmenuLayout.addView(button25);
 
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏWall Hack Offㅓ");
            button25.setTextColor(android.graphics.Color.BLUE);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Wall Hack §4off");
S3();
XROFF();
               }
            }));
            WallmenuLayout.addView(button25);
 
            var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Wall Menu §4Closed");
Wallmenu.dismiss();
mainMenu();
ModPE.showTipMessage('§l§1Wall menu§4 Closed');
S11();
Line3();
               }
            }));
            WallmenuLayout.addView(button25);
 
var sj = new android.widget.TextView(ctx);
             sj.setTextSize(17);
             sj.setText("<{PLEASE DO NOT EDIT}>");
sj.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));    
             sj.setTextColor(android.graphics.Color.BLACK);
             WallmenuLayout.addView(sj);
 
var buttonS = new android.widget.Button(ctx);
            buttonS.setText("ㅏUpdateㅓ");
            buttonS.setTextColor(android.graphics.Color.GREEN);   
            buttonS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            buttonS.setTextSize(25);           
            buttonS.setWidth(70);
            buttonS.setHeight(50);            
            buttonS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
S3();
mainMenu();
Line3();
                    Wallmenu.dismiss();
android.widget.Toast.makeText(ctx,"Nha",0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/NoHacksAllowed"));
    ctx.startActivity(intentBrowser)       
              }
            }));
            WallmenuLayout.addView(buttonS);
     
        
 
                       
                      Wallmenu = new android.widget.PopupWindow(WallmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
Wallmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
Wallmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
ModPE.showTipMessage('§6Wallmenu opened');
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
function MAINMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MAINmenuLayout = new android.widget.LinearLayout(ctx);
            var MAINmenuScroll = new android.widget.ScrollView(ctx);
            var MAINmenuLayout1 = new android.widget.LinearLayout(ctx);
            MAINmenuLayout.setOrientation(1);
            MAINmenuLayout1.setOrientation(1);
 
            MAINmenuScroll.addView(MAINmenuLayout);
            MAINmenuLayout1.addView(MAINmenuScroll);
 
        var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        MAINmenuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
          MAINmenuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
MAINmenuLayout.addView(textview);
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("MAIN Menu §4Closed");
            MAINmenu.dismiss();
                    sjbutton();
mainMenu();
ModPE.showTipMessage('§l§1MAIN menu§4 Closed');
 S11();
Line3();
 
               }
            }));
            MAINmenuLayout.addView(button);       
 
var button = new android.widget.Button(ctx);
            button.setText("ㅏQuick Modsㅓ");
            button.setTextColor(android.graphics.Color.BLUE);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setHealth(60)
Player.setCanFly(1)
Player.setFlying(1);
clientMessage('§6quick mods');
S3();
}
            }));
            MAINmenuLayout.addView(button);
 
            var button1 = new android.widget.Button(ctx);
            button1.setText("ㅏToggle Flightㅓ");
            button1.setTextColor(android.graphics.Color.BLUE);
button1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button1.setWidth(70);
            button1.setHeight(50);
            button1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
            if(Level.getGameMode()==0){
                    if(!flyon){
                  Player.setCanFly(1);
Player.isFlying(1);
clientMessage("Flight§a Enabled");
                 print("Flight Enabled");
                  flyon = true;
S3();
}else{
Player.isFlying(0);
                Player.setCanFly(0);
clientMessage("Flight §4Disabled");
                 print("FlyDisabled");
               flyon = false;
S4();
           }
} else if(Level.getGameMode()==1){
print("Error +&");
S5();
}
               }
            }));
            MAINmenuLayout.addView(button1);
 
var button1 = new android.widget.Button(ctx);
            button1.setText("ㅏToggle god v2ㅓ");
            button1.setTextColor(android.graphics.Color.BLUE);
button1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button1.setWidth(70);
            button1.setHeight(50);
            button1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(!god){
                   
clientMessage("god§a Enabled");
                  god = true;
S3();
}else{
clientMessage("God §4Disabled");
               god = false;
S4();
           }
}}
                
            ));
            MAINmenuLayout.addView(button1);
 
var button1 = new android.widget.Button(ctx);
            button1.setText("ㅏinfinate hungerㅓ");
            button1.setTextColor(android.graphics.Color.BLUE);
button1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button1.setWidth(70);
            button1.setHeight(50);
            button1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(!hun){
                   
clientMessage("infinate hunger§a Enabled");
                  hun = true;
S3();
}else{
clientMessage("infinate hunger §4Disabled");
               hun = false;
S4();
           }
}}
                
            ));
            MAINmenuLayout.addView(button1);
 
            var button2 = new android.widget.Button(ctx);
            button2.setText("ㅏClear Inventoryㅓ");
            button2.setTextColor(android.graphics.Color.BLUE);
button2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button2.setWidth(70);
            button2.setHeight(50);           
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){  
    if(Level.getGameMode() == 0) {
            for(var i = 0; i < 50; i++)
       Player.clearInventorySlot(i);
    print("Inventory has been clear");
clientMessage("All§4 Taken");
S3();
} else {
print("Cannot clear creative inventory");
clientMessage("§4Error: Taking§1 Inventory");
S5();
         }
                     }
            }));
            MAINmenuLayout.addView(button2);
 
            var button3 = new android.widget.Button(ctx);   
var currSurvival = Level.getGameMode()==0;  
            button3.setText(currSurvival?"ㅏForge Onㅓ":"ㅏForge Offㅓ");     
            button3.setTextColor(android.graphics.Color.BLUE);            
button3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button3.setWidth(70);
            button3.setHeight(50);           
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
         currSurvival = !currSurvival;
      Level.setGameMode(currSurvival?0:1);
clientMessage("Toggled Forgemode");
       button3.setText(currSurvival?" ㅏForge Onㅓ":"ㅏForge Offㅓ"); 
S3();
               }
            }));
            MAINmenuLayout.addView(button3);
 
           var button4 = new android.widget.Button(ctx);
            button4.setText("ㅏSuicideㅓ");
            button4.setTextColor(android.graphics.Color.BLUE);
button4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button4.setWidth(70);
            button4.setHeight(50);            
            button4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                   Player.setHealth(0);   
        S3();
               }
            }));
            MAINmenuLayout.addView(button4);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏloginㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 Server.sendChat("/login NoHacksAllowed");
S3();
               }
            }));
            MAINmenuLayout.addView(button30);
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏregisterㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 Server.sendChat("/register NoHacksAllowed");
S3();
               }
            }));
            MAINmenuLayout.addView(button30);
 
            var button7 = new android.widget.Button(ctx);
            button7.setText("ㅏInstant Killㅓ");
            button7.setTextColor(android.graphics.Color.BLUE);
button7.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button7.setWidth(70);
            button7.setHeight(50);           
            button7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                  if(!instantkill) {
             instantkill = true;
              print("Instant Kill turned on");
clientMessage("Instant kill §aon");
S3();
} else { 
         instantkill = false;
             print("Instant Kill turned off");
clientMessage("Instant Kill§4 off");
S4();
}
               }
            }));
            MAINmenuLayout.addView(button7);
 
            var button8 = new android.widget.Button(ctx);
            button8.setText("ㅏInstant Breakㅓ");
            button8.setTextColor(android.graphics.Color.BLUE);
button8.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button8.setWidth(70);
            button8.setHeight(50);            
            button8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
if(Level.getGameMode()==0){   
         if(!instantbreak){                    
         instantbreak = true;
         blocksd();
clientMessage("Instant Break §aon");
        print("Instant Break On!");
S3();
} else {
       instantbreak = false;
       blocksd();    
clientMessage("Instant Break §4off");
       print("Instant Break Off!");
S4();
}
  } else if(Level.getGameMode()==1){
clientMessage("Instant Break §aon");
 print("Cannot use this in creative!")
S5();
}    
               }
            }));
            MAINmenuLayout.addView(button8);
 
            var button10 = new android.widget.Button(ctx);
            button10.setText("ㅏBlocks Dropㅓ");
            button10.setTextColor(android.graphics.Color.BLUE);
button10.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button10.setWidth(70);
            button10.setHeight(50);            
            button10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                   if(!bd){        
         bd = true;
         print("64 Blocks Drop turned on");      
clientMessage("Big Drops §aon");
S3();
} else {
         bd = false;
clientMessage("Big Drops §4off");
         print("64 Blocks Drop turned off");
S4();
}            
}
            }));
            MAINmenuLayout.addView(button10);
 
            var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏHealㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
         Player.setHealth(20);
Player.setHealth(20);
clientMessage("§aHealth set to max");
         print("You have been heal");
S3();
               }
            }));
            MAINmenuLayout.addView(button11);
 
////////////
////////////
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmb topㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
 if(!mbba){   
     print("message board top on");
MBa0();
                  mbba = true;
S3();
}else{
print("message board top off");
MBa1();
               mbba = false;
S4();
           }
               }
            }));
            MAINmenuLayout.addView(button11);
 
//////////
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmb centerㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
 if(!mbbc){   
     print("message board center on");
MBc0();
                  mbbc = true;
S3();
}else{
print("message board center off");
MBc1();
               mbbc = false;
S4();
           }
               }
            }));
            MAINmenuLayout.addView(button11);
//////////
//////////
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmb bottomㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
 if(!mbbb){   
     print("message board bottom on");
MB0();
                  mbbb = true;
S3();
}else{
print("message board bottom off");
MB1();
               mbbb = false;
S4();
           }
               }
            }));
            MAINmenuLayout.addView(button11);
//////////
 
            var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("MAIN Menu §4Closed");
            MAINmenu.dismiss();
mainMenu();
ModPE.showTipMessage('§l§1MAIN menu§4 Closed');
S11();
Line3();
               }
            }));
            MAINmenuLayout.addView(button25);
 
var sj = new android.widget.TextView(ctx);
             sj.setTextSize(17);
             sj.setText("<{PLEASE DO NOT EDIT}>");
sj.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));    
             sj.setTextColor(android.graphics.Color.BLACK);
             MAINmenuLayout.addView(sj);
 
var buttonS = new android.widget.Button(ctx);
            buttonS.setText("ㅏUpdateㅓ");
            buttonS.setTextColor(android.graphics.Color.GREEN);   
            buttonS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            buttonS.setTextSize(25);           
            buttonS.setWidth(70);
            buttonS.setHeight(50);            
            buttonS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
S3();
mainMenu();
Line3();
                    MAINmenu.dismiss();
android.widget.Toast.makeText(ctx,"Nha",0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/NoHacksAllowed"));
    ctx.startActivity(intentBrowser)       
              }
            }));
            MAINmenuLayout.addView(buttonS);
     
        
 
                       
                      MAINmenu = new android.widget.PopupWindow(MAINmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MAINmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MAINmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
ModPE.showTipMessage('§6Mainmenu opened');
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
/////////////////////////////////
 
 
 
 function MessageMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MessagemenuLayout = new android.widget.LinearLayout(ctx);
            var MessagemenuScroll = new android.widget.ScrollView(ctx);
            var MessagemenuLayout1 = new android.widget.LinearLayout(ctx);
            MessagemenuLayout.setOrientation(1);
            MessagemenuLayout1.setOrientation(1);
 
            MessagemenuScroll.addView(MessagemenuLayout);
            MessagemenuLayout1.addView(MessagemenuScroll);
 
        var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        MessagemenuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
          MessagemenuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
MessagemenuLayout.addView(textview);
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
mainMenu();
clientMessage("Message Menu §4Closed");
            Messagemenu.dismiss();
                    sjbutton();
ModPE.showTipMessage('§l§1Message menu§4 Closed');
Line3();
 S11();
 
               }
            }));
            MessagemenuLayout.addView(button);              
var button28 = new android.widget.Button(ctx);
            button28.setText("ㅏDownload Fbㅓ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("§l§adownload my mods at my facebook page NoHacksAllowed");
S3();
                    }
            }));
            MessagemenuLayout.addView(button28);  
 
var button28 = new android.widget.Button(ctx);
            button28.setText("ㅏDownloadㅓ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("§l§adownload my mods mcpehub mod nohacksallowed v"+VER+".");
S3();
                    }
            }));
            MessagemenuLayout.addView(button28);  
 
var button28 = new android.widget.Button(ctx);
            button28.setText("ㅏMcPe Hubㅓ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("§l§adownload my mods at http://mcpehub.com/mod/nohacksallowed-v"+VER+".");
S3();
                    }
            }));
            MessagemenuLayout.addView(button28);  
 
   var button9 = new android.widget.Button(ctx);
            button9.setText("ㅏBlockㅓ");
            button9.setTextColor(android.graphics.Color.BLUE);
button9.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button9.setWidth(70);
            button9.setHeight(50);            
            button9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("██████████████████████████████████████");
   var Block = android.widget.Toast.makeText(ctx,"Block Sent",30).show();
S3();
               }
            }));
            MessagemenuLayout.addView(button9);
       
 
var button30 = new android.widget.Button(ctx);
            button30.setText("ㅏim not a hackerㅓ");
            button30.setTextColor(android.graphics.Color.BLUE);
button30.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button30.setWidth(70);
            button30.setHeight(50);            
            button30.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 Server.sendChat("§aim not a hacker");
S3();
               }
            }));
            MessagemenuLayout.addView(button30);
 
var button31 = new android.widget.Button(ctx);
            button31.setText("ㅏim not hackingㅓ");
            button31.setTextColor(android.graphics.Color.BLUE);
button31.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button31.setWidth(70);
            button31.setHeight(50);            
            button31.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("§aim not hacking");
S3();
               }
            }));
            MessagemenuLayout.addView(button31);
 
var button31 = new android.widget.Button(ctx);
            button31.setText("ㅏim modderㅓ");
            button31.setTextColor(android.graphics.Color.BLUE);
button31.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button31.setWidth(70);
            button31.setHeight(50);            
            button31.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Server.sendChat("§aI dont hack i MOD");
S3();
               }
            }));
            MessagemenuLayout.addView(button31);
 
var button32 = new android.widget.Button(ctx);
            button32.setText("ㅏclick spamㅓ");
            button32.setTextColor(android.graphics.Color.BLUE);
button32.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button32.setWidth(70);
            button32.setHeight(50);            
            button32.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 Server.sendChat("§l§6should i stop spamming  §l§6should i stop spamming! §l§6should i stop spamming §l§6should i stop spamming  §l§6should i stop spamming §l§6should i stop spamming §l§6should i stop spamming §l§6should i stop spamming! ");
S3();
               }
            }));
            MessagemenuLayout.addView(button32);
 
var button33 = new android.widget.Button(ctx);
            button33.setText("ㅏMODS 4 Uㅓ");
            button33.setTextColor(android.graphics.Color.BLUE);
button33.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button33.setWidth(70);
            button33.setHeight(50);            
            button33.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 Server.sendChat("MODS 4 U");
S3();
               }
            }));
            MessagemenuLayout.addView(button33);
 
var button33 = new android.widget.Button(ctx);
            button33.setText("ㅏ∞ㅓ");
            button33.setTextColor(android.graphics.Color.BLUE);
button33.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button33.setWidth(70);
            button33.setHeight(50);            
            button33.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 Server.sendChat("∞"+ ChatColor.RED+"mods and hacks");
S3();
               }
            }));
            MessagemenuLayout.addView(button33);
 
var button33 = new android.widget.Button(ctx);
            button33.setText("ㅏsub to rrㅓ");
            button33.setTextColor(android.graphics.Color.BLUE);
button33.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button33.setWidth(70);
            button33.setHeight(50);            
            button33.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 Server.sendChat("Sub To my yt: "+ ChatColor.RED+" Ripped Robby");
S3();
               }
            }));
            MessagemenuLayout.addView(button33);
 
            var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
mainMenu();
clientMessage("Message Menu §4Closed");
Line3();
            Messagemenu.dismiss();
ModPE.showTipMessage('§l§1Message menu§4 Closed');
S11();
               }
            }));
            MessagemenuLayout.addView(button25);
 
var sj = new android.widget.TextView(ctx);
             sj.setTextSize(17);
             sj.setText("<{PLEASE DO NOT EDIT}>");
sj.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));    
             sj.setTextColor(android.graphics.Color.BLACK);
             MessagemenuLayout.addView(sj);
 
var buttonS = new android.widget.Button(ctx);
            buttonS.setText("ㅏUpdateㅓ");
            buttonS.setTextColor(android.graphics.Color.GREEN);   
            buttonS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            buttonS.setTextSize(25);           
            buttonS.setWidth(70);
            buttonS.setHeight(50);            
            buttonS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
S3();
mainMenu();
 Line3();
                    Messagemenu.dismiss();
android.widget.Toast.makeText(ctx,"Nha",0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/NoHacksAllowed"));
    ctx.startActivity(intentBrowser)       
              }
            }));
            MessagemenuLayout.addView(buttonS);
     
        
 
                       
                      Messagemenu = new android.widget.PopupWindow(MessagemenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
Messagemenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            Messagemenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
ModPE.showTipMessage('§6Message menu opened');
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
/////////////////////////////////
 
function OMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var OmenuLayout = new android.widget.LinearLayout(ctx);
            var OmenuScroll = new android.widget.ScrollView(ctx);
            var OmenuLayout1 = new android.widget.LinearLayout(ctx);
            OmenuLayout.setOrientation(1);
            OmenuLayout1.setOrientation(1);
 
            OmenuScroll.addView(OmenuLayout);
            OmenuLayout1.addView(OmenuScroll);
 
        var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        OmenuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
          OmenuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
OmenuLayout.addView(textview);
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("WorldOptions §4Closed");
            Omenu.dismiss();
mainMenu();
ModPE.showTipMessage('§l§1World options §4 Closed');
Line3();
 S11();
 
               }
            }));
            OmenuLayout.addView(button);              
var button12 = new android.widget.Button(ctx);
            button12.setText("ㅏTeleportㅓ");
            button12.setTextColor(android.graphics.Color.BLUE);
button12.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button12.setWidth(70);
            button12.setHeight(50);            
            button12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){                   clientMessage(" §ateleported");
                     teleportation();             
S3();
              }
            }));
            OmenuLayout.addView(button12);
 
var button13 = new android.widget.Button(ctx);
            button13.setText("ㅏItem Spawnerㅓ");
            button13.setTextColor(android.graphics.Color.BLUE);
button13.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button13.setWidth(70);
            button13.setHeight(50);            
            button13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){                   clientMessage("Item/s §aGiven");
                     tmiD();             
S3();
              }
            }));
            OmenuLayout.addView(button13);
 
var button14 = new android.widget.Button(ctx);
            button14.setText("ㅏTime Setㅓ");
            button14.setTextColor(android.graphics.Color.BLUE);
button14.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button14.setWidth(70);
            button14.setHeight(50);            
            button14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){           
        clientMessage("Time menu §aopend");                              timeDia()
S3();
              }
            }));
            OmenuLayout.addView(button14);
 
var button14 = new android.widget.Button(ctx);
            button14.setText("ㅏInfo menuㅓ");
            button14.setTextColor(android.graphics.Color.BLUE);
button14.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button14.setWidth(70);
            button14.setHeight(50);            
            button14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){           
        clientMessage("Info Menu §aopend");
CiffL2();
CiffL1();
CiffL();
S3();
              }
            }));
            OmenuLayout.addView(button14);
 
var button29 = new android.widget.Button(ctx);
            button29.setText("ㅏCurrent Infoㅓ");
            button29.setTextColor(android.graphics.Color.BLUE);
button29.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button29.setWidth(70);
            button29.setHeight(50);            
            button29.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§1Nha version§6 ("+VER+")");
clientMessage("§2world name> "+ Level.getWorldName()+".");
clientMessage("§6MinecraftPE Version> " + ModPE.getMinecraftVersion()+".")
S3();
                    }
            }));
            OmenuLayout.addView(button29);
 
var button29 = new android.widget.Button(ctx);
            button29.setText("ㅏGlitch Modeㅓ");
            button29.setTextColor(android.graphics.Color.BLUE);
button29.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button29.setWidth(70);
            button29.setHeight(50);            
            button29.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(1, 313, 1);
clientMessage("§1glitch mode §a active");
S3();
                    }
            }));
            OmenuLayout.addView(button29);
 
var button31 = new android.widget.Button(ctx);
            button31.setText("ㅏSpawnPortalㅓ");
            button31.setTextColor(android.graphics.Color.BLUE);
button31.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button31.setWidth(70);
            button31.setHeight(50);            
            button31.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY(),Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+1,Player.getPointedBlockY(),Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+1,Player.getPointedBlockY()+1,Player.getPointedBlockZ(), 90, 0);
Level.setTile(Player.getPointedBlockX()+1,Player.getPointedBlockY()+2,Player.getPointedBlockZ(), 90, 0);
Level.setTile(Player.getPointedBlockX()+1,Player.getPointedBlockY()+3,Player.getPointedBlockZ(), 90, 0);
Level.setTile(Player.getPointedBlockX()+2,Player.getPointedBlockY(),Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+2,Player.getPointedBlockY()+1,Player.getPointedBlockZ(), 90, 0);
Level.setTile(Player.getPointedBlockX()+2,Player.getPointedBlockY()+2,Player.getPointedBlockZ(), 90, 0);
Level.setTile(Player.getPointedBlockX()+2,Player.getPointedBlockY()+3,Player.getPointedBlockZ(), 90, 0);
Level.setTile(Player.getPointedBlockX()+3,Player.getPointedBlockY(),Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+3,Player.getPointedBlockY()+1,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+3,Player.getPointedBlockY()+2,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+3,Player.getPointedBlockY()+3,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+3,Player.getPointedBlockY()+4,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+2,Player.getPointedBlockY()+4,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX()+1,Player.getPointedBlockY()+4,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY()+4,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY()+3,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY()+2,Player.getPointedBlockZ(), 49, 0);
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY()+1,Player.getPointedBlockZ(), 49, 0);
S3();
               }
            }));
            OmenuLayout.addView(button31);
 
var button31 = new android.widget.Button(ctx);
            button31.setText("ㅏHoleㅓ");
            button31.setTextColor(android.graphics.Color.BLUE);
button31.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button31.setWidth(70);
            button31.setHeight(50);            
            button31.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY(),Player.getPointedBlockZ(), 0, 0);
Level.setTile(Player.getPointedBlockX(),Player.getPointedBlockY()-1,Player.getPointedBlockZ(), 0, 0);
S3();
               }
            }));
            OmenuLayout.addView(button31);
 
            var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("WorldOptions §4Closed");
            Omenu.dismiss();
mainMenu();
ModPE.showTipMessage('§l§1world options §4 Closed');
S11();
Line3();
               }
            }));
            OmenuLayout.addView(button25);
 
var sj = new android.widget.TextView(ctx);
             sj.setTextSize(17);
             sj.setText("<{PLEASE DO NOT EDIT}>");
sj.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));    
             sj.setTextColor(android.graphics.Color.BLACK);
             OmenuLayout.addView(sj);
 
var buttonS = new android.widget.Button(ctx);
            buttonS.setText("ㅏUpdateㅓ");
            buttonS.setTextColor(android.graphics.Color.GREEN);   
            buttonS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            buttonS.setTextSize(25);           
            buttonS.setWidth(70);
            buttonS.setHeight(50);            
            buttonS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
S3();
mainMenu();
Line3();
                    Omenu.dismiss();
android.widget.Toast.makeText(ctx,"Nha",0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/NoHacksAllowed"));
    ctx.startActivity(intentBrowser)       
              }
            }));
            OmenuLayout.addView(buttonS);
     
        
 
                       
                      Omenu = new android.widget.PopupWindow(OmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
Omenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            Omenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
ModPE.showTipMessage('§6WorldOptions §a opened');
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
function TMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var TmenuLayout = new android.widget.LinearLayout(ctx);
            var TmenuScroll = new android.widget.ScrollView(ctx);
            var TmenuLayout1 = new android.widget.LinearLayout(ctx);
            TmenuLayout.setOrientation(1);
            TmenuLayout1.setOrientation(1);
 
            TmenuScroll.addView(TmenuLayout);
            TmenuLayout1.addView(TmenuScroll);
 
        var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        TmenuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
          TmenuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
TmenuLayout.addView(textview);
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Thanks Menu §4Closed");
            Tmenu.dismiss();
mainMenu();
Line3();
ModPE.showTipMessage('§l§1Thanks menu§4 Closed');
 S11();
 
               }
            }));
            TmenuLayout.addView(button);              
var button28 = new android.widget.Button(ctx);
            button28.setText("ㅏSean Weaverㅓ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§l§aThanks To Sean Weaver for the support with my mods");
S3();
                    }
            }));
            TmenuLayout.addView(button28);  
 
var button28 = new android.widget.Button(ctx);
            button28.setText("ㅏnic roeㅓ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§l§aThanks To Nic roe for being a good freind");
S3();
                    }
            }));
            TmenuLayout.addView(button28);  
 
var button28 = new android.widget.Button(ctx);
            button28.setText("ㅏallㅓ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§l§aThanks To Sean Weaver-§1Nic roe-§2Laykon Nightingale-§3jonothan volrat-§4carlos Hernendaz-§5mehdi amg charo-§6Alexander real g-§7manuel fica-§8ty carrol-§9kenyon carter veney for liking my fb");
S3();
                    }
            }));
            TmenuLayout.addView(button28);  
 
            var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Thanks Menu §4Closed");
            Tmenu.dismiss();
mainMenu();
Line3();
ModPE.showTipMessage('§l§1Thanks menu§4 Closed');
S11();
               }
            }));
            TmenuLayout.addView(button25);
 
var sj = new android.widget.TextView(ctx);
             sj.setTextSize(17);
             sj.setText("<{PLEASE DO NOT EDIT}>");
sj.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));    
             sj.setTextColor(android.graphics.Color.BLACK);
             TmenuLayout.addView(sj);
 
var buttonS = new android.widget.Button(ctx);
            buttonS.setText("ㅏUpdateㅓ");
            buttonS.setTextColor(android.graphics.Color.GREEN);   
            buttonS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            buttonS.setTextSize(25);           
            buttonS.setWidth(70);
            buttonS.setHeight(50);            
            buttonS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
S3();
mainMenu();
Line3();
Tmenu.dismiss();
android.widget.Toast.makeText(ctx,"Nha",0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/NoHacksAllowed"));
    ctx.startActivity(intentBrowser)       
              }
            }));
            TmenuLayout.addView(buttonS);
     
        
 
                       
                      Tmenu = new android.widget.PopupWindow(TmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
Tmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            Tmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
ModPE.showTipMessage('§6thanks menu opened');
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
//////server
 
function SeMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var SemenuLayout = new android.widget.LinearLayout(ctx);
            var SemenuScroll = new android.widget.ScrollView(ctx);
            var SemenuLayout1 = new android.widget.LinearLayout(ctx);
            SemenuLayout.setOrientation(1);
            SemenuLayout1.setOrientation(1);
 
            SemenuScroll.addView(SemenuLayout);
            SemenuLayout1.addView(SemenuScroll);
 
        var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        SemenuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
          SemenuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
SemenuLayout.addView(textview);
 
            var button = new android.widget.Button(ctx);
            button.setText("ㅏCloseMenuㅓ");
            button.setTextColor(android.graphics.Color.RED);
            button.setWidth(65);
            button.setHeight(50);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Thanks Menu §4Closed");
            Semenu.dismiss();
mainMenu();
Line3();
ModPE.showTipMessage('§l§1Thanks menu§4 Closed');
 S11();
 
               }
            }));
            SemenuLayout.addView(button);              
var button28 = new android.widget.Button(ctx);
            button28.setText(" "+Server.getAddress()+" ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§l§aserver "+Server.getAddress()+" ");
S3();
                    }
            }));
            SemenuLayout.addView(button28);  
var button28 = new android.widget.Button(ctx);
            button28.setText(" "+Server.getPort()+" ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§l§aport "+Server.getPort()+" ");
S3();
                    }
            }));
            SemenuLayout.addView(button28); 
 
var button28 = new android.widget.Button(ctx);
            button28.setText(" "+Server.getAllPlayerNames(1)+" ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§l§anames "+Server.getAllPlayerNames(1)+" ");
S3();
                    }
            }));
            SemenuLayout.addView(button28); 
 
 
var button28 = new android.widget.Button(ctx);
            button28.setText(" "+Server.getAllPlayers(1)+" ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§l§anames "+Server.getAllPlayers(1)+" ");
S3();
                    }
            }));
            SemenuLayout.addView(button28); 
 
var button28 = new android.widget.Button(ctx);
            button28.setText("ㅏHost Modsㅓ");
            button28.setTextColor(android.graphics.Color.BLUE);
button28.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button28.setWidth(70);
            button28.setHeight(50);            
            button28.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§1client unavalible §4error: §10975. can't host modded lobby on §9IoS §1server or un hosted server... unable to patch mcpe get mcpe ver§9 IoS ");
S3();
print("canot host see error console");
                    }
            }));
            SemenuLayout.addView(button28); 
 
 
            var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Settings Menu §4Closed");
            Semenu.dismiss();
mainMenu();
Line3();
ModPE.showTipMessage('§l§1server menu§4 Closed');
S11();
               }
            }));
            SemenuLayout.addView(button25);
 
var sj = new android.widget.TextView(ctx);
             sj.setTextSize(17);
             sj.setText("<{PLEASE DO NOT EDIT}>");
sj.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));    
             sj.setTextColor(android.graphics.Color.BLACK);
             SemenuLayout.addView(sj);
 
var buttonS = new android.widget.Button(ctx);
            buttonS.setText("ㅏUpdateㅓ");
            buttonS.setTextColor(android.graphics.Color.GREEN);   
            buttonS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            buttonS.setTextSize(25);           
            buttonS.setWidth(70);
            buttonS.setHeight(50);            
            buttonS.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
S3();
mainMenu();
Line3();
Tmenu.dismiss();
android.widget.Toast.makeText(ctx,"Nha",0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/NoHacksAllowed"));
    ctx.startActivity(intentBrowser)       
              }
            }));
            SemenuLayout.addView(buttonS);
     
        
 
                       
                      Semenu = new android.widget.PopupWindow(SemenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
Semenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            Semenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
ModPE.showTipMessage('§6server menu opened');
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
 
////////////left line
 
function LEFTMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var LEFTLayout = new android.widget.LinearLayout(ctx);
            var LEFTScroll = new android.widget.ScrollView(ctx);
            var LEFTLayout1 = new android.widget.LinearLayout(ctx);
            LEFTLayout.setOrientation(1);
            LEFTLayout1.setOrientation(1);
 
            LEFTScroll.addView(LEFTLayout);
            LEFTLayout1.addView(LEFTScroll);
                       
                      LEFTmenu = new android.widget.PopupWindow(LEFTLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/52, ctx.getWindowManager().getDefaultDisplay().getHeight());
LEFTmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(120,0,0,120))); 
            LEFTmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("Nha l FOUND " + error+"ERRORS");
        }
    }}));
}
////////////right line
function RIGHTMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var RIGHTLayout = new android.widget.LinearLayout(ctx);
            var RIGHTScroll = new android.widget.ScrollView(ctx);
            var RIGHTLayout1 = new android.widget.LinearLayout(ctx);
            RIGHTLayout.setOrientation(1);
            RIGHTLayout1.setOrientation(1);
 
            RIGHTScroll.addView(RIGHTLayout);
            RIGHTLayout1.addView(RIGHTScroll);
                       
                      RIGHTmenu = new android.widget.PopupWindow(RIGHTLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/52, ctx.getWindowManager().getDefaultDisplay().getHeight());
RIGHTmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(120,0,0,120))); 
            RIGHTmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos1 | Gravity.TOP, 0, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}
 
/////////////Call Lines////////
 
function Line1(){
LEFTMenu();
RIGHTMenu();
}
/////////////dismiss lines////////
function Line2(){
 LEFTmenu.dismiss();
RIGHTmenu.dismiss();
}
////////////dismiss then call lines////////
function Line3(){
Line2();
Line1();
}
 
/////////coloured menu 2////////
 
//var GUIColor1 =  new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0)); 
//transparent
 
//var GUIColor2 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140,0,0,0)); 
//black
 
//var GUIColor3 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140,140,140,140)); 
//white
 
//var GUIColor4 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,125,0,0));
//red
 
//var GUIColor5 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,0,125));
//blue
 
//var GUIColor6 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,80,80,80));
// light grey
 
 
//var GUIColor7 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,50,50,50));
//grey
 
//var GUIColor8 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,12,30,10));
//yellow maybe
 
//var GUIColor10 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,30,30,30));
//dark grey
 
//var GUIColor11 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,125,0));
//green
 
//var GUIColor99 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,82,0,50));
//pink
 
 
function colourMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var c0menuLayout = new android.widget.LinearLayout(ctx);
            var c0menuScroll = new android.widget.ScrollView(ctx);
            var c0menuLayout1 = new android.widget.LinearLayout(ctx);
            c0menuLayout.setOrientation(1);
            c0menuLayout1.setOrientation(1);
 
            c0menuScroll.addView(c0menuLayout);
            c0menuLayout1.addView(c0menuScroll);
                       
var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        c0menuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
 
          c0menuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
c0menuLayout.addView(textview);
 
 
var button11 = new android.widget.Button(ctx);
            button11.setText("current " +currentColour+" ");
 button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
               }
            }));
            c0menuLayout.addView(button11);
 
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Colour Menu §4Closed");
            c0menu.dismiss();
mainMenu();
Line3();
ModPE.showTipMessage('§l§1colour menu§4 Closed');
S11();
               }
            }));
            c0menuLayout.addView(button25);
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmenu colour blackㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
Backmenu.dismiss();
GUIColor = GUIColor2
currentColour = "black";
BackMenu();
c0menu.dismiss();
mainMenu();
               }
            }));
            c0menuLayout.addView(button11);
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmenu colour whiteㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
Backmenu.dismiss();
GUIColor = GUIColor3
currentColour = "white";
BackMenu();
c0menu.dismiss();
mainMenu();
               }
            }));
            c0menuLayout.addView(button11);
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmenu colour pinkㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
Backmenu.dismiss();
GUIColor = GUIColor99
currentColour = "pink";
BackMenu();
c0menu.dismiss();
mainMenu();
               }
            }));
            c0menuLayout.addView(button11);
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmenu colour redㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
Backmenu.dismiss();
GUIColor = GUIColor4
currentColour = "red";
BackMenu();
c0menu.dismiss();
mainMenu();
               }
            }));
            c0menuLayout.addView(button11);
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmenu colour greenㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
Backmenu.dismiss();
GUIColor = GUIColor11
currentColour = "green";
BackMenu();
c0menu.dismiss();
mainMenu();
               }
            }));
            c0menuLayout.addView(button11);
 
 
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏmenu colour blueㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Backmenu.dismiss();
GUIColor = GUIColor5
currentColour = "blue";
BackMenu();
c0menu.dismiss();
mainMenu();
}
            }));
            c0menuLayout.addView(button11);
 
                      c0menu = new android.widget.PopupWindow(c0menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
c0menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            c0menu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
//////////////////green back/////
 
function BackMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var BackmenuLayout = new android.widget.LinearLayout(ctx);
            var BackmenuScroll = new android.widget.ScrollView(ctx);
            var BackmenuLayout1 = new android.widget.LinearLayout(ctx);
            BackmenuLayout.setOrientation(1);
            BackmenuLayout1.setOrientation(1);
 
            BackmenuScroll.addView(BackmenuLayout);
            BackmenuLayout1.addView(BackmenuScroll);
 
                      Backmenu = new android.widget.PopupWindow(BackmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
 
Backmenu.setBackgroundDrawable(GUIColor); 
 Backmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("Nha v"+VER+" FOUND " + error);
        }
    }}));
}
////////////////settings////////
function SetMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var setmenuLayout = new android.widget.LinearLayout(ctx);
            var setmenuScroll = new android.widget.ScrollView(ctx);
            var setmenuLayout1 = new android.widget.LinearLayout(ctx);
            setmenuLayout.setOrientation(1);
            setmenuLayout1.setOrientation(1);
 
            setmenuScroll.addView(setmenuLayout);
            setmenuLayout1.addView(setmenuScroll);
                       
var title = new android.widget.TextView(ctx);
        title.setTextSize(23);
        title.setText("  NoHacksAllowed V"+VER+".");
title.setGravity(android.view.Gravity.CENTER);
       title.setTextColor(android.graphics.Color.BLUE); 
title.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        setmenuLayout.addView(title);
 
    var stitle = new android.widget.TextView(ctx);
          stitle.setTextSize(15);
          stitle.setText("________CREATED BY NHA________");
         stitle.setTextColor(android.graphics.Color.BLUE);
 
          setmenuLayout.addView(stitle);
 
textview = android.widget.TextView(ctx);            
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.RED);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));       
getXYZ();           
setmenuLayout.addView(textview);
 
var button25 = new android.widget.Button(ctx);
            button25.setText("ㅏClose Menuㅓ");
            button25.setTextColor(android.graphics.Color.RED);
            button25.setWidth(65);
            button25.setHeight(50);
button25.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            button25.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("Settings Menu §4Closed");
            setmenu.dismiss();
mainMenu();
Line3();
ModPE.showTipMessage('§l§1colour menu§4 Closed');
S11();
               }
            }));
            setmenuLayout.addView(button25);
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏright menuㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
setmenu.dismiss();
GUIPos = GUIright
GUIPos1 = GUIcen
Backmenu.dismiss();
BackMenu();
SetMenu();
Line3();
               }
            }));
            setmenuLayout.addView(button11);
 
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏcenter menuㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
setmenu.dismiss();
GUIPos = GUIcen
GUIPos1 = GUIcen
Backmenu.dismiss();
BackMenu();
SetMenu(); 
Line3();
               } 
            }));
            setmenuLayout.addView(button11);
 
var button11 = new android.widget.Button(ctx);
            button11.setText("ㅏleft menuㅓ");
            button11.setTextColor(android.graphics.Color.BLUE);
button11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
            button11.setWidth(70);
            button11.setHeight(50);            
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
setmenu.dismiss();
GUIPos = GUIleft
GUIPos1 = GUIcen
Backmenu.dismiss();
BackMenu();
SetMenu();
Line3();
               }
            }));
            setmenuLayout.addView(button11);
 
                      setmenu = new android.widget.PopupWindow(setmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
setmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            setmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("Nha v"+VER+" FOUND " + error+"ERRORS");
        }
    }}));
}
 
//////////////////message board lay
 
 
 function MBMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBLayout = new android.widget.LinearLayout(ctx);
            var MBScroll = new android.widget.ScrollView(ctx);
            var MBLayout1 = new android.widget.LinearLayout(ctx);
            MBLayout.setOrientation(1);
            MBLayout1.setOrientation(1);
 
            MBScroll.addView(MBLayout);
            MBLayout1.addView(MBScroll);
                       
 
var scrollText = new android.widget.TextView(ctx);
scrollText.setText("welcome "+ Player.getName(Player.getEntity()) +" to nha v14.   press ⚛ to open the menu.  new update includes message board and bug fixes. special thanks to SkriptLord for the message board.  Big thanks to artis the GaMr for beta testing nha v13 v13.1 and v14 its been grate working with you.  to request beta access to v15 go to my fb to ask me for features u want to se message my fb to notify me with a new or re occurring bug mrssage my fb.   my facebook page to message me is nohacksallowed");
scrollText.setTextSize(10);                                                                                  scrollText.setTextColor(android.graphics.Color.GREEN);
 
  
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
 
scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBLayout.addView(scrollText);
 
 
                      MBmenu = new android.widget.PopupWindow(MBLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/25);
MBmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,99,0,0))); 
            MBmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}
 
/////////////////message board back
 
 function MBBMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBLayout = new android.widget.LinearLayout(ctx);
            var MBBScroll = new android.widget.ScrollView(ctx);
            var MBBLayout1 = new android.widget.LinearLayout(ctx);
            MBBLayout.setOrientation(1);
            MBBLayout1.setOrientation(1);
 
            MBBScroll.addView(MBBLayout);
            MBBLayout1.addView(MBBScroll);
                       
                      MBBmenu = new android.widget.PopupWindow(MBBLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/45);
MBBmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100,0,0,100))); 
            MBBmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}
 
///////message board dismiss
 
 function MB1(){
MBmenu.dismiss();
MBBmenu.dismiss();
}
///////message board call 
 
 function MB0(){
MBBMenu();
MBMenu();
}
 
/////////
//////////////////message board center lay
 
 
 function MBcMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBcLayout = new android.widget.LinearLayout(ctx);
            var MBcScroll = new android.widget.ScrollView(ctx);
            var MBcLayout1 = new android.widget.LinearLayout(ctx);
            MBcLayout.setOrientation(1);
            MBcLayout1.setOrientation(1);
 
            MBcScroll.addView(MBcLayout);
            MBcLayout1.addView(MBcScroll);
                       
 
var scrollText = new android.widget.TextView(ctx);
scrollText.setText("welcome "+ Player.getName(Player.getEntity()) +" to nha v14.   press ⚛ to open the menu.  new update includes message board and bug fixes. special thanks to SkriptLord for the message board.  Big thanks to artis the GaMr for beta testing nha v13 v13.1 and v14 its been grate working with you.  to request beta access to v15 go to my fb to ask me for features u want to se message my fb to notify me with a new or re occurring bug mrssage my fb.   my facebook page to message me is nohacksallowed");
scrollText.setTextSize(10);                                                                                  scrollText.setTextColor(android.graphics.Color.GREEN);
 
  
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
 
scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBcLayout.addView(scrollText);
 
 
                      MBcmenu = new android.widget.PopupWindow(MBcLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/25);
MBcmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,99,0,0))); 
            MBcmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}
 
/////////////////message board back
 
 function MBBcMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBcLayout = new android.widget.LinearLayout(ctx);
            var MBBcScroll = new android.widget.ScrollView(ctx);
            var MBBcLayout1 = new android.widget.LinearLayout(ctx);
            MBBcLayout.setOrientation(1);
            MBBcLayout1.setOrientation(1);
 
            MBBcScroll.addView(MBBcLayout);
            MBBcLayout1.addView(MBBcScroll);
                       
                      MBBcmenu = new android.widget.PopupWindow(MBBcLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/45);
MBBcmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100,0,0,100))); 
            MBBcmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}
 
///////message board center dismiss
 
 function MBc1(){
MBcmenu.dismiss();
MBBcmenu.dismiss();
}
///////message center board call 
 
 function MBc0(){
MBBcMenu();
MBcMenu();
}
 
/////////
 
 
 
 
 
//////////////////message board lay top
 
 function MBaMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);
 
            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
                       
 
var scrollText = new android.widget.TextView(ctx);
scrollText.setText("welcome "+ Player.getName(Player.getEntity()) +" to nha v14.   press ⚛ to open the menu.  new update includes message board and bug fixes. special thanks to SkriptLord for the message board.  Big thanks to artis the GaMr for beta testing nha v13 v13.1 and v14 its been grate working with you.  to request beta access to v15 go to my fb to ask me for features u want to se message my fb to notify me with a new or re occurring bug mrssage my fb.   my facebook page to message me is nohacksallowed");
scrollText.setTextSize(10);                                                                                  scrollText.setTextColor(android.graphics.Color.GREEN);
 
  
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
 
scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);
 
 
                      MBamenu = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/25);
MBamenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,99,0,0))); 
            MBamenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP , 0, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}
 
/////////////////message board top back
 
 function MBBaMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);
 
            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
                       
                      MBBamenu = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/45);
MBBamenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100,0,0,100))); 
            MBBamenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP , 0, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}
 
///////message top board dismiss
 
 function MBa1(){
MBamenu.dismiss();
MBBamenu.dismiss();
}
///////message top board call 
 
 function MBa0(){
MBBaMenu();
MBaMenu();
}
 
/////////
 
function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
       try {
var Nha = android.widget.Toast.makeText(ctx,"NHA THANKS YOU FOR USING THIS MOD MENU DOWNLOAD AND UPDATE AT...",30).show();
android.widget.Toast.makeText(ctx," https://www.facebook.com/NoHacksAllowed ",90).show();
           if(menu!=null){
            menu.dismiss();
MAINmenu.dismiss();
Wallmenu.dismiss();
Modelmenu.dismiss();
ModPE.resetFov();
            menu = null;              
           }  
         } catch (errors) { 
         print("Error: " + errors)
         }
    }}));
}
