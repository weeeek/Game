        var heros = [{
            "name": "Team SII 小粉丝",
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
                    "summon": "1.mp3", //总选本身并不可怕，可怕的是万恶的运营
                    "attacking": "2.mp3",//你投票了吗？
                    "useSkill": "3.mp3", //单推王就是你了
                    "dying": "4.mp3"//救救孩子~~
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
                "激励": function () {

                },
                "激怒": function () {

                },
                "Battlecry": function () {
                    //为对手投两票

                    this.attack = this.attack * 2;
                },
                "Deathrattle": function () {
                    this.HP = this.HP * 2;
                },
                "光环": function () {
                    //自己影响别的
                },
                "战场触发": {
                    //在战场上被影响
                    "回合开始触发": function () {

                    },
                    "回合结束触发": function () {

                    },
                    "攻击时触发": function () {

                    }
                },
                "墓地触发": function () {
                    //在墓地里被影响
                },
                "手牌触发": {
                    //在上牌上被影响
                    "回合开始触发": function () {

                    },
                    "回合结束触发": function () {

                    }
                },
                "移除触发": function () {
                    //在游戏区外被影响
                },
                "牌库触发": function () {
                    //在牌库被影响
                }
            }
        }];