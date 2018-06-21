var bosses = [{
    "name": "DuangDuang",
    "property": {
        "designer": "Gone",
        "image": "",
        "scarcity": "传说",
        "introduceHTML": "",
        "team": {
            "id": "101",
            "name": "Team SII"
        },
        "voice": {
            "CV": "Gone",
            "summon": "1.mp3", //喵~~~
            "attacking": "2.mp3",//吼~~~
            "useSkill": "3.mp3", //...
            "dying": "4.mp3"//呜~~~
        },
        "type": "英雄",
        "status": {
            "alive": true,
            "injured": false,
        },
        "cost": 0,
        "attack": 0,
        "HP": 30,
        "asleep": false,
        "frozen": false,
        "潜行": false,
        "shield": false,
        "冲锋": false,
        "嘲讽": false,
        "吸血": false,
        "风怒": false,
        "冰冻": false,
        "超级风怒": false,
        "剧毒": false,
        "特殊剧毒": false,
        "沉默": false,
        "免疫": false,
        "选定": false, //精灵龙技能
        "虚无": false, //无法被物理攻击
        "禁言": false, //被攻击对象获得沉默
        "激怒": [],
        "Skill": {
            "name": "出来吧，铲屎官！",
            "image": "1.png",
            "ability": [
                function (who) {
                    //召唤一坨便便
                    who.ground.push(cards.find((x) => x.id == "10003"));
                }
            ]
        },
        "Battlecry": [
            function (who) {
                //召唤一坨便便
                who.ground.push(cards.find((x) => x.id == "10003"));
            }
        ],
        "Deathrattle": [],
        "光环": [],//自己影响别的
        "战场触发": {
            //在战场上被影响
            "回合开始触发": [],
            "回合结束触发": [],
            "攻击时触发": []
        },
        "墓地触发": [],//在墓地里被影响
        "手牌触发": {
            //在上牌上被影响
            "回合开始触发": [],
            "回合结束触发": []
        },
        "移除触发": [],//在游戏区外被影响
        "牌库触发": [],//在牌库被影响
    }
}];