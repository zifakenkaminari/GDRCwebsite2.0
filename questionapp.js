$(function () {

    // 下決定function，決定場景切換到哪張圖片還有對應的訊息
    function makeDecision(decision) {
        if (currentScene === 0) {
            currentScene = 1;
            scene = {
                message: "想賺大錢嗎？",
                startButtonShow: false,
                yesButtonShow: true,
                noButtonShow: true
            };
        } else if (currentScene === 1) {
            if (decision === 1) {
                currentScene = 2;
                scene = {
                    message: "你喜歡高產的工作嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 17;
                scene = {
                    message: "你有過人的才能嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }

        } else if (currentScene === 2) {
            if (decision === 1) {
                currentScene = 4;
                scene = {
                    message: "你會寫程式嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 3;
                scene = {
                    message: "你怕負責任嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 4) {
            if (decision === 1) {
                currentScene = 5;
                scene = {
                    message: "寫很久了？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 8;
                scene = {
                    message: "要你何用？",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 5) {
            if (decision === 7) {
                currentScene = 5;
                scene = {
                    message: "建構部：程式設計師",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 6;
                scene = {
                    message: "建構部：技術總監",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 3) {
            if (decision === 1) {
                currentScene = 9;
                scene = {
                    message: "行政部：顧問",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 10;
                scene = {
                    message: "你有大局觀嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 10) {
            if (decision === 1) {
                currentScene = 11;
                scene = {
                    message: "風格部：創意總監",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 12;
                scene = {
                    message: "你有錢嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 12) {
            if (decision === 1) {
                currentScene = 14;
                scene = {
                    message: "你有良心嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 13;
                scene = {
                    message: "行政部：製作人",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 12) {
            if (decision === 1) {
                currentScene = 15;
                scene = {
                    message: "行政部：遊戲工作室創辦人",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 16;
                scene = {
                    message: "行政部：社交遊戲工作室創辦人",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 17) {
            if (decision === 1) {
                currentScene = 21;
                scene = {
                    message: "別人的創意能讓你興奮嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 18;
                scene = {
                    message: "你毒舌嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 18) {
            if (decision === 1) {
                currentScene = 19;
                scene = {
                    message: "機制部：遊戲批評家",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 20;
                scene = {
                    message: "機制部：遊戲評測員",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 21) {
            if (decision === 1) {
                currentScene = 24;
                scene = {
                    message: "介意被低估嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 23;
                scene = {
                    message: "認為遊戲性重要嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 23) {
            if (decision === 1) {
                currentScene = 77;
                scene = {
                    message: "能一個人製作出遊戲嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 78;
                scene = {
                    message: "建構部：社交遊戲開發者",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 77) {
            if (decision === 1) {
                currentScene = 73;
                scene = {
                    message: "建構部：獨立遊戲開發者",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 76;
                scene = {
                    message: "寫東西語法行嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 76) {
            if (decision === 1) {
                currentScene = 75;
                scene = {
                    message: "公關部：宣傳網頁寫手",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 72;
                scene = {
                    message: "你遊戲總玩得好吧？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 72) {
            if (decision === 1) {
                currentScene = 71;
                scene = {
                    message: "機制部：普通玩家/遊戲測試員",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 70;
                scene = {
                    message: "機制部：電競選手/遊戲代練/遊戲測試員",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 24) {
            if (decision === 1) {
                currentScene = 74;
                scene = {
                    message: "喜歡畫圖嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 25;
                scene = {
                    message: "喜歡獨處嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 74) {
            if (decision === 1) {
                currentScene = 80;
                scene = {
                    message: "喜歡動手多過動嘴？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 44;
                scene = {
                    message: "你喜歡用半成品的編緝器東湊西合嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 44) {
            if (decision === 1) {
                currentScene = 57;
                scene = {
                    message: "機制部：關卡策劃",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 43;
                scene = {
                    message: "你對Excel在行嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 43) {
            if (decision === 1) {
                currentScene = 55;
                scene = {
                    message: "喜歡別人指揮你嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 54;
                scene = {
                    message: "風格部：劇本寫手",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 55) {
            if (decision === 1) {
                currentScene = 59;
                scene = {
                    message: "會對極小的細節產生病態的偏執嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 58;
                scene = {
                    message: "風格部/行政部：主策",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 59) {
            if (decision === 1) {
                currentScene = 48;
                scene = {
                    message: "會對流血有執著嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 51;
                scene = {
                    message: "風格部/建構部：事件劇本工程師",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 48) {
            if (decision === 1) {
                currentScene = 49;
                scene = {
                    message: "機制部：戰鬥策劃",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 50;
                scene = {
                    message: "機制部：遊戲策劃",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 80) {
            if (decision === 1) {
                currentScene = 61;
                scene = {
                    message: "想當「真正的」藝術家嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 56;
                scene = {
                    message: "風格部：藝術總監",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 61) {
            if (decision === 1) {
                currentScene = 62;
                scene = {
                    message: "你是法國人嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 60;
                scene = {
                    message: "想為兩秒鐘花上兩星期嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 60) {
            if (decision === 1) {
                currentScene = 53;
                scene = {
                    message: "風格部：動畫師",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 52;
                scene = {
                    message: "風格部：3D美術",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 62) {
            if (decision === 1) {
                currentScene = 68;
                scene = {
                    message: "風格部：漫畫師",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 63;
                scene = {
                    message: "你是亞洲人嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 63) {
            if (decision === 1) {
                currentScene = 64;
                scene = {
                    message: "風格部：原畫師",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 65;
                scene = {
                    message: "你喜歡堆箱子嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 65) {
            if (decision === 1) {
                currentScene = 66;
                scene = {
                    message: "風格部：場景美術",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 67;
                scene = {
                    message: "風格部：2D美術",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 25) {
            if (decision === 1) {
                currentScene = 42;
                scene = {
                    message: "你有音樂細胞嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 26;
                scene = {
                    message: "你喜歡演戲嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 42) {
            if (decision === 1) {
                currentScene = 45;
                scene = {
                    message: "你喜歡敲或扔東西嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 40;
                scene = {
                    message: "行政部/建構部：IT支援",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 45) {
            if (decision === 1) {
                currentScene = 46;
                scene = {
                    message: "風格部：音效設計師",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 41;
                scene = {
                    message: "風格部：作曲家",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 26) {
            if (decision === 1) {
                currentScene = 31;
                scene = {
                    message: "你是影視圈的名人嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 27;
                scene = {
                    message: "介意圖像裡的筆誤嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 27) {
            if (decision === 1) {
                currentScene = 28;
                scene = {
                    message: "機制部：質保員",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 29;
                scene = {
                    message: "想選擇和誰共事嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 29) {
            if (decision === 1) {
                currentScene = 32;
                scene = {
                    message: "行政部：社長",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 33;
                scene = {
                    message: "行政部：社團管理",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 31) {
            if (decision === 1) {
                currentScene = 30;
                scene = {
                    message: "風格部：配音演員",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 36;
                scene = {
                    message: "你年輕皮膚好身材棒嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 36) {
            if (decision === 1) {
                currentScene = 37;
                scene = {
                    message: "你是男的嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            } else {
                currentScene = 47;
                scene = {
                    message: "風格部：動作捕捉替身",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        } else if (currentScene === 37) {
            if (decision === 1) {
                currentScene = 34;
                scene = {
                    message: "公關部：戰爭類型遊戲模特",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 38;
                scene = {
                    message: "你喜歡製作道具嗎？",
                    startButtonShow: false,
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
        } else if (currentScene === 38) {
            if (decision === 1) {
                currentScene = 39;
                scene = {
                    message: "公關部：Coser",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            } else {
                currentScene = 35;
                scene = {
                    message: "公關部：Showgirl",
                    startButtonShow: false,
                    yesButtonShow: false,
                    noButtonShow: false
                };
            }
        }


        //決定完之後 重新繪製畫面
        render(scene);
    }

    // 繪製畫面的函數
    function render(scene) {
        $message.text(scene.message);
        // 場景決定要不要顯示yesButton
        if (scene.yesButtonShow)
            $yesButton.show();
        else
            $yesButton.hide();
        // 場景決定要不要顯示noButton
        if (scene.noButtonShow)
            $noButton.show();
        else
            $noButton.hide();
        if (scene.startButtonShow)
            $startButton.show();
        else
            $startButton.hide();
    }

    var scene = {
        message: "此測驗是為了讓新加入之成員知道自己擅長或適合在遊戲業界擔任何種角色，並以此作為基準讓成員知道自己在社團中的定位。",
        startButtonShow: true,
        yesButtonShow: false,
        noButtonShow: false
    };
    var currentScene = 0;

    var $message = $("#message");
    var $yesButton = $("#yesButton");
    var $noButton = $("#noButton");
    var $startButton = $("#startButton");
    // 當按下Yes的時候 使用決定參數1
    $yesButton.click(function () {
        makeDecision(1);
    });
    // 當按下No的時候 使用決定參數2
    $noButton.click(function () {
        makeDecision(2);
    });
    $startButton.click(function () {
        makeDecision(1);
    });
    render(scene);
});
