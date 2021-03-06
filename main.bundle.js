!function(e) {
    var t = {};
    function a(s) {
        if (t[s])
            return t[s].exports;
        var i = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(i.exports, i, i.exports, a),
        i.l = !0,
        i.exports
    }
    a.m = e,
    a.c = t,
    a.d = function(e, t, s) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(e, t) {
        if (1 & t && (e = a(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var s = Object.create(null);
        if (a.r(s),
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                a.d(s, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return s
    }
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, "a", t),
        t
    }
    ,
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    a.p = "",
    a(a.s = 17)
}([function(e, t, a) {
    var s = {
        "./chef.png": 1,
        "./customer1.jpg": 2,
        "./customer10.jpg": 3,
        "./customer11.jpg": 4,
        "./customer12.jpg": 5,
        "./customer13.jpg": 6,
        "./customer14.jpg": 7,
        "./customer2.jpg": 8,
        "./customer3.jpg": 9,
        "./customer4.jpg": 10,
        "./customer5.jpg": 11,
        "./customer6.jpg": 12,
        "./customer7.jpg": 13,
        "./customer8.jpg": 14,
        "./customer9.jpg": 15,
        "./waiter.png": 16
    };
    function i(e) {
        var t = r(e);
        return a(t)
    }
    function r(e) {
        var t = s[e];
        if (!(t + 1)) {
            var a = new Error("Cannot find module '" + e + "'");
            throw a.code = "MODULE_NOT_FOUND",
            a
        }
        return t
    }
    i.keys = function() {
        return Object.keys(s)
    }
    ,
    i.resolve = r,
    e.exports = i,
    i.id = 0
}
, function(e, t, a) {
    e.exports = a.p + "./images/chef.png"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer1.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer10.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer11.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer12.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer13.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer14.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer2.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer3.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer4.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer5.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer6.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer7.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer8.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/customer9.jpg"
}
, function(e, t, a) {
    e.exports = a.p + "./images/waiter.png"
}
, function(e, t, a) {
    "use strict";
    a.r(t);
    var s = a(0);
    s.keys().map(s);
    const i = {
        character: {
            waiter: {
                initial: [[44.5, 30], [54.5, 30], [64.5, 30]]
            },
            chef: {
                initial: [[54.2, 8], [67.2, 8], [80.2, 8]]
            },
            customer: {
                initial: [[-10, 8.875]]
            }
        },
        atEntrance: [4, 8.875],
        atKitchenOut: [[54.2, 20], [67.2, 20], [80.2, 20]],
        atTable: [[24.5, 69], [44.5, 69], [64.5, 69], [84.5, 69]],
        atSeat: [[24, 90], [44, 90], [64, 90], [84, 90]],
        atLine: [[4, 89], [4, 79], [4, 69], [4, 59], [4, 49], [4, 39], [4, 29], [4, 19]],
        outRestaurant: [100.7, 88.875]
    }
      , r = {
        customer: {
            order: 3,
            eat: 3
        },
        msgTime: 1.5
    }
      , n = {
        waiter: {
            greet: "欢迎光临!",
            checkout: "一共收您",
            served: "亲，这是您的"
        },
        chef: {
            remind: "做好了！"
        },
        customer: {
            chat: ["屏幕对面的你在干嘛？", "下班吃饭，单身狗日常。", "今天你那边下雨了吗？", "一一得一，一二得二，二二得三..."],
            order: ["我要", "我要吃", "我点"]
        }
    }
      , o = [{
        name: "鱼香肉丝",
        cost: 15,
        sale: 30
    }, {
        name: "红烧排骨",
        cost: 25,
        sale: 50
    }, {
        name: "宫保鸡丁",
        cost: 20,
        sale: 40
    }, {
        name: "烧鸭",
        cost: 20,
        sale: 40
    }, {
        name: "白切鸡",
        cost: 20,
        sale: 40
    }, {
        name: "番茄炒鸡蛋",
        cost: 10,
        sale: 20
    }, {
        name: "番茄鸡蛋汤",
        cost: 10,
        sale: 20
    }, {
        name: "水煮鱼",
        cost: 25,
        sale: 50
    }, {
        name: "清蒸金枪鱼",
        cost: 25,
        sale: 50
    }, {
        name: "卤猪脚",
        cost: 20,
        sale: 40
    }, {
        name: "苦瓜炒鸡蛋",
        cost: 10,
        sale: 20
    }, {
        name: "炒芥兰",
        cost: 10,
        sale: 20
    }, {
        name: "炒空心菜",
        cost: 10,
        sale: 20
    }, {
        name: "香菇炒鸡肉",
        cost: 20,
        sale: 40
    }, {
        name: "卤鸭",
        cost: 20,
        sale: 40
    }, {
        name: "红萝卜炒肉",
        cost: 15,
        sale: 30
    }, {
        name: "紫菜肉沫汤",
        cost: 15,
        sale: 30
    }, {
        name: "红烧牛肉",
        cost: 25,
        sale: 50
    }];
    let c = ["./images/customer1.jpg", "./images/customer2.jpg", "./images/customer3.jpg", "./images/customer4.jpg", "./images/customer5.jpg", "./images/customer6.jpg", "./images/customer7.jpg", "./images/customer8.jpg", "./images/customer9.jpg", "./images/customer10.jpg", "./images/customer11.jpg", "./images/customer12.jpg", "./images/customer13.jpg", "./images/customer14.jpg"]
      , h = {
        name: "Hinako",
        salary: 3e3,
        avatarUrl: "./images/waiter.png"
    }
      , u = {
        name: "Alice",
        salary: 1e4,
        avatarUrl: "./images/chef.png"
    };
    function l(e, t, a) {
        t = parseFloat(t),
        a = parseFloat(a),
        function e(s) {
            if (Array.isArray(s))
                !function e(s) {
                    s.forEach((i,r)=>{
                        Array.isArray(i) ? e(i) : "number" == typeof i && (0 === r ? s[r] = t * i / 100 : 1 === r && (s[r] = a * i / 100))
                    }
                    )
                }(s);
            else
                for (let t in s)
                    s.hasOwnProperty(t) && e(s[t])
        }(e)
    }
    function d(e, t) {
        let a = t - e;
        return e + Math.round(a * Math.random())
    }
    let m = d.bind(null, 1e7, 99999999);
    function p(e) {
        let t = Object.getPrototypeOf(e);
        return Object.assign(Object.create(t), e)
    }
    class g {
        constructor(e, t, a) {
            this.timeScale = a,
            this.restaurant = t,
            this.$container = document.querySelector(e),
            this.$restaurantCtrl = this.$container.querySelector(".restaurant-state"),
            this.$restaurantState = this.$restaurantCtrl.querySelector(".state"),
            this.$employeeList = this.$restaurantCtrl.querySelector(".employees"),
            this.$cashNum = this.$container.querySelector(".cash-bar .count"),
            this.$cookList = this.$container.querySelector(".kitchen .cookList ul"),
            this.$kitchenWorkplaces = this.$container.querySelectorAll(".kitchen .work-place"),
            this.$orderedList = this.$container.querySelectorAll(".table .list"),
            this.$tableStates = this.$container.querySelectorAll(".table .state"),
            this.$customerCt = this.$container.querySelector(".man .customers"),
            this.$employeeCt = this.$container.querySelector(".man .employees"),
            this.cashType = "$";
            let s = getComputedStyle(this.$container).width
              , r = getComputedStyle(this.$container).height;
            l(i, s, r),
            this.addEventListener()
        }
        changeRestaurantState(e) {
            "initial" === e ? this.$restaurantState.innerHTML = "未营业" : "opening" === e && (this.$restaurantState.innerHTML = "营业中")
        }
        addEventListener() {
            let e = this;
            this.$restaurantCtrl.addEventListener("click", t=>{
                let a = t.target;
                if ("open" === a.className)
                    e.restaurant.start();
                else if (a.classList.contains("add")) {
                    let t, s;
                    a.classList.contains("add-waiter") ? s = "waiter" : a.classList.contains("add-chef") && (s = "chef"),
                    s && (t = e.restaurant.createEmployee(s)),
                    t && e.restaurant.hire(t)
                } else if ("fire" === a.className) {
                    let t = a.dataset.type
                      , s = parseInt(a.dataset.id)
                      , i = e.restaurant.staff.findTypeEmployee(t, s);
                    i && e.restaurant.fire(i)
                }
            }
            )
        }
        setCash(e) {
            this.$cashNum && (this.$cashNum.innerText = this.cashType + e)
        }
        getCookStateItem(e) {
            return e.querySelector(".state")
        }
        clearCookState(e) {
            let t = this.$kitchenWorkplaces[e];
            this.getCookStateItem(t).innerHTML = ""
        }
        initialCookState(e) {
            let t = this.$kitchenWorkplaces[e];
            this.getCookStateItem(t).innerHTML = ""
        }
        updateEmployeelist() {
            let e = this.restaurant.staff.getAllEmployees().reduce((e,t)=>e + `<li class="employee">\n          <div class="avatar" style="background-image: url(${t.avatarUrl})"></div>\n          <div class="detail">\n            <p><span>薪水：</span><span class="salary">${t.salary}</span></p>\n            <a href="javascript:;" class="fire" data-type="${t.type}" data-id="${t.id}">解雇员工</a>\n          </div>\n        </li>`, "");
            this.$employeeList.innerHTML = e
        }
        updateTableState(e, t, a) {
            "initial" === t ? this.$tableStates[e].innerHTML = "" : "ordering" === t ? this.$tableStates[e].innerHTML = "点菜中..." : "eating" === t ? this.$tableStates[e].innerHTML = `正在吃${a}...` : "checkout" === t && (this.$tableStates[e].innerHTML = "结账中...")
        }
        updateCookState(e, t) {
            let a = this.$kitchenWorkplaces[e]
              , s = this.getCookStateItem(a)
              , i = t.cookTime * this.timeScale;
            return new Promise((e,a)=>{
                !function(e) {
                    let a = new Date;
                    requestAnimationFrame(function r() {
                        let n = new Date
                          , o = n - a
                          , c = `<span class="thing">正在做：${t.name}</span><span class="time">${function(e) {
                            let t = [Math.floor(e / 1e3 / 60 % 60), Math.floor(e / 1e3 % 60)];
                            return (t = t.reduce((e,t)=>(t < 0 && (t = 0),
                            1 === (t = t.toString()).length && (t = "0" + t),
                            e.push(t),
                            e), [])).join(":")
                        }(i - o)}</span>`;
                        s.innerHTML = c,
                        o < i ? requestAnimationFrame(r) : e()
                    })
                }(e)
            }
            )
        }
        async moveToQueue(e, t) {
            let a = this
              , s = t.getQueueIndex(e);
            if (-1 === s) {
                let t = i.character.customer.initial[0];
                f(e.element, t, null, a.removeCharacter.bind(a, e))
            } else {
                let t = i.atLine[s];
                await new Promise((a,s)=>{f(e.element,t,null,a)})
            }
        }
        updateQueue(e) {
            let t = this;
            e.getQueue().forEach((a,s)=>{
                a && t.moveToQueue(a, e)
            }
            )
        }
        addWord(e, t) {
            let a = r.msgTime * this.timeScale;
            !function(e, t, a) {
                let s = new Date;
                e.style.zIndex = 1,
                e.innerHTML = `<div class="msg">${t}</div>`,
                requestAnimationFrame(function t() {
                    new Date - s < a ? requestAnimationFrame(t) : (e.innerHTML = "",
                    e.style.zIndex = 0)
                })
            }(e, t = t.trim(), a)
        }
        orderFood(e) {
            let t = r.customer.order * this.timeScale
              , a = this;
            return this.updateTableState(e.seatIndex, "ordering"),
            new Promise((s,i)=>{
                setTimeout(()=>{
                    a.updateTableState(e.seatIndex, "initial"),
                    s()
                }
                , t)
            }
            )
        }
        addCharacter(e, t=0) {
            let a = e.type
              , [s,r] = i.character[a].initial[t]
              , n = function(e) {
                let t = document.createElement("div");
                return t.innerHTML = e,
                t.children[0]
            }(`<div class="${a}" style="background-image: url(${e.avatarUrl}); left: ${s}px; top: ${r}px;"></div>`);
            e.element = n,
            "customer" === a ? this.$customerCt.appendChild(n) : this.$employeeCt.appendChild(n)
        }
        removeCharacter(e) {
            "customer" === e.type ? this.$customerCt.removeChild(e.element) : this.$employeeCt.removeChild(e.element)
        }
        updateCookList(e) {
            this.$cookList.innerHTML = "";
            let t = e.reduce((e,t)=>e + `<li>${t.name}</li>`, "");
            this.$cookList.innerHTML = t
        }
        async moveTo(e, t, a) {
            let s;
            "entrance" === t ? s = i.atEntrance : "seat" === t ? s = i.atSeat[a] : "table" === t ? s = i.atTable[a] : "kitchenout" === t ? s = i.atKitchenOut[a] : "outrestaurant" === t ? s = i.outRestaurant : "queuehead" === t ? s = i.atLine[0] : "initial" === t && (s = i.character[e.type].initial[a]),
            s && await new Promise((t,a)=>{f(e.element,s,null,t)})
        }
        updateOrdered(e, t) {
            let a = e.reduce((e,t)=>{
                let a, s = t.state;
                return "serving" === s ? a = "正在做" : "served" === s ? a = "已上菜" : "eated" === s && (a = "已吃完"),
                e + `<li class="${s}"><span>${t.name}</span><i>${a}</i></li>`
            }
            , "");
            this.$orderedList[t].innerHTML = a
        }
        removeOrderedList(e) {
            this.$orderedList[e].innerHTML = ""
        }
        async eating(e, t) {
            let a = r.customer.eat * this.timeScale;
            this.updateTableState(e.seatIndex, "eating", t.name),
            await new Promise((t,s)=>{setTimeout(()=>{this.updateTableState(e.seatIndex,"initial"),t()},a)})
        }
    }
    function f(e, t, a, s) {
        let i = parseFloat(getComputedStyle(e).left)
          , r = parseFloat(getComputedStyle(e).top)
          , [n,o] = t
          , c = Math.abs(n - i)
          , h = Math.abs(o - r)
          , u = i
          , l = r;
        return a || (a = 10),
        requestAnimationFrame(function t() {
            let d = Math.atan2(o - l, n - u)
              , m = Math.cos(d) * a
              , p = Math.sin(d) * a;
            u = parseFloat(getComputedStyle(e).left) + m,
            l = parseFloat(getComputedStyle(e).top) + p;
            let g = Math.abs(u - i)
              , f = Math.abs(l - r);
            e.style.left = u + "px",
            e.style.top = l + "px",
            console.log(l),
            c <= g && h <= f ? s() : requestAnimationFrame(t)
        })
    }
    class w {
        constructor({name: e, salary: t, avatarUrl: a}) {
            this.name = e,
            this.salary = t,
            this.avatarUrl = a,
            this.handler = {},
            this.state = "initial",
            this.befired = !1
        }
        quit() {
            "waiting" === this.state ? (this.$restaurantView.removeCharacter(this),
            this.restaurant.detach(`add${this.type}task`, this.restaurantLinsten),
            this.$restaurantView = null,
            this.restaurant = null,
            this.handler = {}) : this.befired = !0
        }
        waiting() {
            this.state = "waiting"
        }
        working() {
            this.state = "working"
        }
        watch(e, t) {
            this.handler[e] || (this.handler[e] = []),
            this.handler[e].push(t)
        }
        emit(e, ...t) {
            this.handler[e] && this.handler[e].forEach(e=>e(...t))
        }
    }
    class k extends w {
        constructor(e) {
            super(e),
            this.id = m(),
            this.type = "waiter"
        }
        entry(e, t) {
            this.restaurant = e,
            this.$restaurantView = e.$view,
            this.$restaurantView.addCharacter(this, t),
            this.waiting(),
            this.addTaskListener(),
            this.emit("checktask")
        }
        isWorker(e) {
            return !!this.handler[e]
        }
        addTaskListener() {
            let e = this
              , t = this.restaurant;
            this.restaurantLinsten = function() {
                "waiting" === e.state && e.emit("checktask")
            }
            ,
            t.watch("addwaitertask", this.restaurantLinsten),
            this.watch("checktask", async()=>{
                if (t.taskStack.waiter && t.taskStack.waiter.length > 0) {
                    let[a,...s] = t.taskStack.waiter.shift();
                    e.emit(a, ...s)
                } else {
                    e.working();
                    let t = e.restaurant.staff.getTypeEmployeeIndex(e);
                    await e.$restaurantView.moveTo(e,"initial",t),
                    e.waiting()
                }
            }
            ),
            this.watch("serve", async a=>{
                e.working(),
                await e.serveFood(a),
                e.say("served", a.name),
                e.waiting(),
                e.emit("checkselfstate"),
                t.emit("served", a)
            }
            ),
            this.watch("checkout", async a=>{
                e.working(),
                await e.checkout(a),
                e.waiting(),
                e.emit("checkselfstate"),
                t.emit("checkout", a)
            }
            ),
            this.watch("checkselfstate", ()=>{
                e.befired ? e.quit() : e.emit("checktask")
            }
            )
        }
        say(e, ...t) {
            let a, s = this.$restaurantView;
            "greet" === e ? a = n.waiter.greet : "served" === e ? a = n.waiter.served : "getmoney" === e && (a = n.waiter.checkout),
            t.length > 0 && (a += t.reduce((e,t)=>e += t, "")),
            a && s.addWord(this.element, a)
        }
        async toTable(e) {
            let t = this.$restaurantView;
            await t.moveTo(this,"table",e)
        }
        async toKitchen(e=0) {
            let t = this.$restaurantView;
            await t.moveTo(this,"kitchenout",e)
        }
        async serveFood(e) {
            let t = e.kitchenIndex
              , a = (this.restaurant,
            e.customer)
              , s = (this.$restaurantView,
            a.seatIndex);
            await this.toKitchen(t),
            await this.toTable(s),
            e.served(),
            this.$restaurantView.updateOrdered(a.ordered, s)
        }
        async checkout(e) {
            let t = this.restaurant;
            await this.toTable(e.seatIndex);
            let a = e.ordered.reduce((e,t)=>e += t.sale, 0);
            t.$view.updateTableState(e.seatIndex, "checkout"),
            this.say("getmoney", a),
            await new Promise((a,s)=>{setTimeout(()=>{t.$view.updateTableState(e.seatIndex,"initial"),a()},1e3)}),
            t.cash.increase(a)
        }
    }
    class y extends w {
        constructor(e) {
            super(e),
            this.id = m(),
            this.type = "chef"
        }
        entry(e, t) {
            this.restaurant = e,
            this.$restaurantView = e.$view,
            this.$restaurantView.addCharacter(this, t),
            this.$restaurantView.initialCookState(t),
            this.waiting(),
            this.addTaskListener(),
            this.emit("checktask")
        }
        isWorker(e) {
            return !!this.handler[e]
        }
        addTaskListener() {
            let e = this
              , t = this.restaurant;
            this.restaurantLinsten = function() {
                "waiting" === e.state && e.emit("checktask")
            }
            ,
            t.watch("addcheftask", this.restaurantLinsten),
            this.watch("checktask", ()=>{
                if (t.taskStack.chef && t.taskStack.chef.length > 0) {
                    let[a,...s] = t.taskStack.chef.shift();
                    e.emit(a, ...s)
                }
            }
            ),
            this.watch("cook", async t=>{
                e.working();
                let a = await e.cook(t)
                  , s = e.restaurant;
                e.say("remind", t.name),
                e.waiting(),
                e.emit("checkselfstate"),
                s.emit("cooked", t, a)
            }
            ),
            this.watch("checkselfstate", ()=>{
                e.befired ? e.quit() : e.emit("checktask")
            }
            )
        }
        say(e, ...t) {
            let a;
            "remind" === e && (a = t[0] + n.chef.remind),
            a && this.$restaurantView.addWord(this.element, a)
        }
        async cook(e) {
            let t = this.restaurant.taskStack.chef
              , a = this.$restaurantView
              , s = this.restaurant.staff.getTypeEmployeeIndex(this)
              , i = t.reduce((e,t)=>("cook" === t[0] && e.push(t[1]),
            e), []);
            return a.updateCookList(i),
            e.kitchenIndex = s,
            await a.moveTo(this,"initial",s),
            await a.updateCookState(s,e),
            a.initialCookState(s),
            s
        }
    }
    class v {
        constructor(e) {
            this.id = m(),
            this.ordered = [],
            this.taskStack = [],
            this.handler = {},
            this.avatarUrl = e,
            this.state = "waiting",
            this.type = "customer",
            this.addTaskListener()
        }
        addTaskListener() {
            let e = this;
            this.watch("queueup", async t=>{
                await e.queueUp(t),
                e.waiting(),
                t.emit("queueup"),
                e.do()
            }
            ),
            this.watch("toseat", async t=>{
                await e.toSeat(t),
                e.waiting(),
                e.restaurant.emit("sitin", e),
                e.do()
            }
            ),
            this.watch("order", async()=>{
                await e.order(),
                e.waiting(),
                e.restaurant.emit("ordered", e),
                e.do()
            }
            ),
            this.watch("eat", async t=>{
                await e.eat(t),
                e.waiting(),
                e.restaurant.emit("eaten", e),
                e.do()
            }
            ),
            this.watch("leave", async()=>{
                e.leave(),
                e.restaurant.emit("left", e)
            }
            )
        }
        say(e, ...t) {
            let a, s, i, r = this.$restaurantView;
            "order" === e ? s = n.customer.order : "chat" === e && (s = n.customer.chat),
            a = s[i = d(0, s.length - 1)],
            t.length > 0 && (a += t.reduce((e,t)=>e += t, "")),
            a && r.addWord(this.element, a)
        }
        async queueUp(e) {
            let t = this;
            t.restaurant = e;
            let a = t.$restaurantView = e.$view
              , s = e.queue;
            e.queue.queueUp(t),
            await a.moveTo(t,"entrance"),
            await a.moveToQueue(t,s);
            let i = d(0, s.getLength());
            s.getQueue()[i];
            t && t.say("chat")
        }
        async toSeat(e) {
            let t = this.$restaurantView
              , a = this.restaurant;
            this.seatIndex = e,
            t.updateQueue(a.queue),
            await t.moveTo(this,"queuehead"),
            await t.moveTo(this,"seat",e)
        }
        leave() {
            let e = this
              , t = e.$restaurantView
              , a = e.restaurant
              , s = a.seats.getCustomerSeatIndex(e);
            a.seats.leave(s),
            t.removeOrderedList(s),
            t.moveTo(e, "outrestaurant").then(()=>{
                t.removeCharacter(e)
            }
            )
        }
        async order() {
            let e = this
              , t = this.$restaurantView
              , a = e.restaurant.menu.getMenu()
              , s = d(1, 4);
            for (let t = 0; t < s; t++) {
                let s = a[d(0, a.length - 1)];
                if (e.ordered.some(e=>e.name === s.name))
                    t -= 1;
                else {
                    let t = p(s);
                    t.customer = e,
                    e.ordered.push(t)
                }
            }
            await t.orderFood(e);
            let i = e.ordered.map(e=>e.name);
            e.say("order", i.join("，")),
            t.updateOrdered(e.ordered, e.seatIndex)
        }
        async eat(e) {
            let t = this.$restaurantView;
            await t.eating(this,e),
            e.eated(),
            t.updateOrdered(this.ordered, this.seatIndex)
        }
        working() {
            this.state = "working"
        }
        waiting() {
            this.state = "waiting"
        }
        addTask(e, t) {
            this.taskStack.push([e, t]),
            this.do()
        }
        do() {
            let e = this;
            if ("waiting" === e.state && e.taskStack.length > 0) {
                e.working();
                let[t,a] = e.taskStack.shift();
                this.emit(t, a)
            }
        }
        watch(e, t) {
            this.handler[e] || (this.handler[e] = []),
            this.handler[e].push(t)
        }
        emit(e, ...t) {
            this.handler[e] && this.handler[e].forEach(e=>e(...t))
        }
    }
    const [$,S,T] = [0, 1, 2];
    let x;
    class j {
        constructor({name: e, cost: t, sale: a, time: s}) {
            this.name = e,
            this.cost = t,
            this.sale = a,
            this.cookTime = d(1, 10),
            this.customer,
            this.state = "serving",
            this.kitchenIndex
        }
        serving() {
            this.state = "serving"
        }
        served() {
            this.state = "served"
        }
        eated() {
            this.state = "eated"
        }
    }
    a(18);
    let L = new class {
        constructor({cash: e=0, timeScale: t=1e3, elementId: a}) {
            this.$view = x = new g(a,this,t),
            this.handler = {},
            this.taskStack = {},
            this.timeScale = t,
            this.state = $,
            this.cash = function(e) {
                return x.setCash(e),
                {
                    getBalance: ()=>e,
                    increase: t=>{
                        if ("number" == typeof t)
                            return e += t,
                            x.setCash(e),
                            e
                    }
                    ,
                    decrease: t=>{
                        if ("number" == typeof t)
                            return e -= t,
                            x.setCash(e),
                            e
                    }
                }
            }(e),
            this.queue = function(e) {
                let t = Array.from({
                    length: e
                }).map(e=>null);
                return {
                    queueUp: e=>{
                        let a = t.indexOf(null);
                        return -1 !== a && (t[a] = e,
                        !0)
                    }
                    ,
                    getQueueIndex: e=>t.indexOf(e),
                    dequeue: ()=>{
                        let e = t.shift();
                        return t[t.length] = null,
                        e
                    }
                    ,
                    getLength: ()=>t.filter(e=>null !== e).length,
                    getQueue: ()=>t
                }
            }(i.atLine.length),
            this.menu = function() {
                let e = [];
                return {
                    addFood(t) {
                        t.constructor === j && e.push(t)
                    },
                    getMenu: ()=>e.concat()
                }
            }(),
            this.staff = function(e, t) {
                let a = {}
                  , s = Object.keys(t);
                return {
                    hire: i=>{
                        let r;
                        if (i && (r = s.indexOf(i.type)),
                        -1 === r)
                            return new Error("The restaurant do not offer this kind of occupation!");
                        {
                            let n = s[r];
                            a[n] || (a[n] = []);
                            let o = t[n].initial.length;
                            if (a[n].length < o) {
                                let t = a[n].push(i)
                                  , s = t - 1;
                                return i.entry(e, s),
                                x.updateEmployeelist(),
                                !0
                            }
                            alert("该类型雇员已到达最大数量，无法继续添加！")
                        }
                    }
                    ,
                    fire: e=>{
                        let t, i;
                        if (e && (t = s.indexOf(e.type)),
                        i = a[e.type],
                        -1 !== t && i) {
                            let t = i.indexOf(e);
                            -1 !== t ? 1 === i.length ? alert("该类型雇员已经减少到最小数，无法解雇！") : (i.splice(t, 1),
                            e.quit(),
                            x.updateEmployeelist()) : r()
                        } else
                            r();
                        function r() {
                            return new Error("The restaurant did not hire this employee!")
                        }
                    }
                    ,
                    getTypeEmployeeIndex: e=>{
                        let t = a[e.type];
                        return Array.isArray(t) ? t.indexOf(e) : -1
                    }
                    ,
                    hasTypeEmployee: e=>{
                        if (a[e] && a[e].length > 0)
                            return !0
                    }
                    ,
                    getAllEmployees: ()=>{
                        let e = [];
                        for (let t in a)
                            a.hasOwnProperty(t) && (e = a[t].concat(e));
                        return e
                    }
                    ,
                    findTypeEmployee: (e,t)=>{
                        if (a[e]) {
                            let s = a[e].find(e=>e.id === t);
                            if (s)
                                return s
                        }
                    }
                }
            }(this, i.character),
            this.seats = function(e) {
                let t = Array.from({
                    length: e
                }).map(e=>null);
                return {
                    sit: (e,a)=>{
                        t[e] = a
                    }
                    ,
                    leave: e=>{
                        t[e] = null
                    }
                    ,
                    hasEmpty() {
                        let e = t.indexOf(null);
                        return -1 !== e
                    },
                    getEmptySeatIndex: ()=>t.indexOf(null),
                    getCustomerSeatIndex: e=>t.indexOf(e)
                }
            }(i.atSeat.length),
            this.addListener(),
            this.emit("becreated", this)
        }
        addTask(e, ...t) {
            let a = this;
            "cook" === e ? (this.taskStack.chef || (this.taskStack.chef = []),
            t[0].forEach(t=>{
                a.taskStack.chef.push([e, t])
            }
            ),
            this.emit("addcheftask")) : (this.taskStack.waiter || (this.taskStack.waiter = []),
            this.taskStack.waiter.push([e, ...t]),
            this.emit("addwaitertask"))
        }
        addListener() {
            let e = this;
            this.watch("open", ()=>{
                let t = 0
                  , a = d(2e3, 4e3);
                setInterval(()=>{
                    t += 1,
                    t %= c.length;
                    let a = new v(c[t]);
                    e.addCustomer(a)
                }
                , a)
            }
            ),
            this.watch("queueup", async()=>{
                this.emit("checkemptyseat")
            }
            ),
            this.watch("checkemptyseat", ()=>{
                if (e.seats.hasEmpty() && e.queue.getLength() > 0) {
                    let t = e.queue.dequeue()
                      , a = e.seats.getEmptySeatIndex();
                    e.seats.sit(a, t),
                    t.addTask("toseat", a)
                }
            }
            ),
            this.watch("sitin", t=>{
                t.addTask("order"),
                e.addTask("greet", t)
            }
            ),
            this.watch("ordered", t=>{
                e.addTask("cook", t.ordered)
            }
            ),
            this.watch("cooked", (t,a)=>{
                e.addTask("serve", t, a)
            }
            ),
            this.watch("served", e=>{
                e.customer.addTask("eat", e)
            }
            ),
            this.watch("eaten", t=>{
                let a = t.ordered
                  , s = a.find(e=>"served" === e.state)
                  , i = a.find(e=>"serving" === e.state);
                s || i || e.emit("eatenfoods", t)
            }
            ),
            this.watch("eatenfoods", t=>{
                e.addTask("checkout", t)
            }
            ),
            this.watch("checkout", e=>{
                e.addTask("leave")
            }
            ),
            this.watch("left", t=>{
                e.emit("checkemptyseat")
            }
            )
        }
        addCustomer(e) {
            x.addCharacter(e),
            e.addTask("queueup", this)
        }
        createEmployee(e) {
            let t;
            return "waiter" === e ? t = new k(h) : "chef" === e && (t = new y(u)),
            t
        }
        hire(e) {
            this.staff.hire(e)
        }
        fire(e) {
            this.staff.fire(e)
        }
        start() {
            let e = this.staff.hasTypeEmployee("chef")
              , t = this.staff.hasTypeEmployee("waiter")
              , a = this.menu.getMenu();
            if (e)
                if (t) {
                    if (0 === a.length)
                        return new Error("The restaurant did not have food menu!");
                    this.state !== S && (this.state = S,
                    this.$view.changeRestaurantState("opening"),
                    this.emit("open"))
                } else
                    alert("还没有雇用服务员！");
            else
                alert("还没有雇用厨师！")
        }
        watch(e, t) {
            this.handler[e] || (this.handler[e] = []),
            this.handler[e].push(t)
        }
        emit(e, ...t) {
            this.handler[e] && this.handler[e].forEach(e=>e(...t))
        }
        detach(e, t) {
            if (this.handler[e]) {
                let a = this.handler[e].indexOf(t);
                -1 !== a && this.handler[e].splice(a, 1)
            }
        }
    }
    ({
        cash: 1e4,
        seatAmount: 1,
        timeScale: 1e3,
        elementId: ".container"
    });
    for (let e = 0; e < o.length; e++) {
        new j(o[e])
    }
    o.forEach(e=>{
        let t = new j(e);
        L.menu.addFood(t)
    }
    )
}
, function(e, t) {}
]);
