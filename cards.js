var cards = [{
    "id": "10001",
    "name": "成珏的单推王",
    "property": {
        "designer": "Gone",
        "image": "",
        "scarcity": "0",
        "introduceHTML": "",
        "team": {
            "id": "101",
            "name": "Team SII"
        },
        "voice": {
            "CV": "Gone",
            "summon": "1.mp3", //我是~单推王
            "attacking": "2.mp3",//时间不多了，我们投票吧！
            "dying": "3.mp3" //这些票不是我投的
        },
        "type": "随从",
        "status": {
            "alive": true,
            "injured": false,
        },
        "cost": 5,
        "attack": 6,
        "HP": 2,
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
        "激励": [],
        "激怒": [],
        "Battlecry": [
            function (target) {
                //目标获得圣盾
                target.property.shield = true;
            }, function (target) {
                //目标攻击力+2
                target.property.attack = target.property.attack + 2;
            }
        ],
        "Deathrattle": [
            //战场上随机一个随从+2生命值
            function () {

                this.HP = this.HP * 2;
            }, function () {
                $scope.cards[0].property.HP = $scope.cards[0].property.HP + 2;
            }
        ],
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
}, {
    "id": "10002",
    "name": "成珏的饭头",
    "property": {
        "designer": "Gone",
        "image": "",
        "scarcity": "0",
        "introduceHTML": "",
        "team": {
            "id": "101",
            "name": "Team SII"
        },
        "voice": {
            "CV": "Gone",
            "summon": "1.mp3", //噢，我感觉很难受！
            "attacking": "2.mp3",//让我好好抱抱你！
            "dying": "3.mp3" //啊，oh，不~~
        },
        "type": "随从",
        "status": {
            "alive": true,
            "injured": false,
        },
        "cost": 1,
        "attack": 1,
        "HP": 1,
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
        "激励": [],
        "激怒": [],
        "Battlecry": [function (target) {
            //单推王获得圣盾

            $scope.cards[0].property.shield = true;
        }, function () {
            //单推王攻击力+2

            $scope.cards[0].property.attack = $scope.cards[0].property.attack + 2;
        }],
        "Deathrattle": [function () {
            this.HP = this.HP * 2;
        }, function () {

            $scope.cards[0].property.HP = $scope.cards[0].property.HP + 2;
        }],
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
}, {
    "id": "10003",
    "name": "Duang的便便",
    "property": {
        "designer": "Gone",
        "image": "",
        "scarcity": "0",
        "introduceHTML": "",
        "team": {
            "id": "101",
            "name": "Team SII"
        },
        "voice": {
            "CV": "Gone",
            "summon": null, //
            "attacking": null,//
            "dying": null //
        },
        "type": "随从",
        "status": {
            "alive": true,
            "injured": false,
        },
        "cost": 1,
        "attack": 0,
        "HP": 1,
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
        "激励": [],
        "激怒": [],
        "Battlecry": [],
        "Deathrattle": [
            //对敌方所有角色造成当前生命值的伤害
            function (who) {
                --who.role.HP;
                velocityAngular.forEach(who.ground, function (retinue, index) {
                    --retinue.property.HP;
                })
            }
        ],
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