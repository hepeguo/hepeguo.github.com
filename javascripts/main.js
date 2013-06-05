var guo = function() {
                var md = false, mm = false, mu = true;
                var ms, mx;
                var pages = document.getElementsByClassName("R_item");
                var footers = document.getElementsByClassName("guo_footer_item");
                var mLength = pages.length;
                for (var i = 0; i < mLength; i++) {
                    pages[i].state = i;
                    pages[i].i = i;
                    if (i > 4) {
                        pages[i].state = -1;
                        pages[i].style.display = "none";
                    } else {
                        stateCtrl(pages[i].state, i);
                    }
                    pages[i].onmousedown = function(event) {
                        event.preventDefault();
                        if (mu && this.state == 2) {
                            ms = event.pageX;
                            _start(this);
                        }
                    }
                    pages[i].onmousemove = function() {
                        event.preventDefault()
                        if (md) {
                            mx = event.pageX;
                            _move(this);
                        }
                    }
                    pages[i].onmouseup = function() {
                        event.preventDefault();
                        if (mm) {
                            _end(this, mx - ms);
                            autoRun(this, mx - ms);
                        }
                        md = false;
                        mu = true;
                        mm = false;
                    }
                }
                function _start(self) {
                    md = true;
                    if (timer) {
                        clearInterval(timer);
                    }
                    self.mLeft = self.offsetLeft;
                    self.style.webkitTransition = "";
                    mu = false;
                }

                function _move(self) {
                    if (mx !== ms) {
                        mm = true;
                    }
                    self.style.left = self.mLeft + mx - ms + "px";
                    if (mx > ms) {
                        pages[((self.i - 1) % mLength + mLength) % mLength].style.left = self.mLeft + (mx - ms) / 10 + "px";
                    } else if (mx < ms) {
                        pages[(self.i + 1) % mLength].style.left = self.mLeft + (mx - ms) / 10 + "px";
                    }

                }

                function _end(self, obj) {
                    if (obj < 0) {
                        for (var i = 0; i < mLength; i++) {
                            if (pages[i].state !== -1) {
                                pages[i].state--;
                            }
                            console.log(footers[i])
                            footers[i].style.border = "1px solid black";
                        }
                        pages[((self.i - 2) % mLength + mLength) % mLength].state = -1;
                        pages[(self.i + 3) % mLength].state = 4;
                        footers[(self.i + 1) % mLength].style.border = "1px solid red";
                    }
                    if (obj > 0) {
                        for (var i = 0; i < mLength; i++) {
                            if (pages[i].state !== -1) {
                                pages[i].state++;
                            }
                            footers[i].style.border = "1px solid black";
                        }
                        pages[(self.i + 2) % mLength].state = -1;
                        pages[((self.i - 3) % mLength + mLength) % mLength].state = 0;
                        footers[((self.i - 1) % mLength + mLength) % mLength].style.border = "1px solid red";
                    }
                    for (var i = 0; i < mLength; i++) {
                        if (pages[i].state == -1) {
                            pages[i].style.display = "none";
                        } else {
                            pages[i].style.display = "block";
                        }
                        pages[i].style.left = self.mLeft + "px";
                        stateCtrl(pages[i].state, i);
                    }
                }

                function autoRun(self, obj2) {
                    if (obj2 > 0) {
                        var num = self.i - 1;
                        timer = setInterval(function() {
                            _end(pages[((num--) % mLength + mLength) % mLength], 1);
                        }, 3000);
                    } else if (obj2 < 0) {
                        var num = self.i + 1;
                        timer = setInterval(function() {
                            _end(pages[(num++) % mLength], -1);
                        }, 3000);
                    }
                }

                autoRun(pages[1], -1);
                //autoRun(pages[3], 1);

                function stateCtrl(obj1, obj2) {
                    switch (obj1) {
                        case 0 :
                            pages[obj2].style.webkitTransform = "perspective(600px) rotateY(50deg) translateZ(-600px)";
                            pages[obj2].style.webkitTransition = "all 0.5s ease-out";
                            break;
                        case 1 :
                            pages[obj2].style.webkitTransform = "perspective(600px) rotateY(45deg) translateZ(-400px)";
                            pages[obj2].style.webkitTransition = "all 0.5s ease-out";
                            break;
                        case 2 :
                            pages[obj2].style.webkitTransform = "perspective(600px) rotateY(0deg) translateZ(0)";
                            pages[obj2].style.webkitTransition = "all 0.5s ease-out";
                            break;
                        case 3 :
                            pages[obj2].style.webkitTransform = "perspective(600px) rotateY(-45deg) translateZ(-400px)";
                            pages[obj2].style.webkitTransition = "all 0.5s ease-out";
                            break;
                        case 4 :
                            pages[obj2].style.webkitTransform = "perspective(600px) rotateY(-50deg) translateZ(-600px)";
                            pages[obj2].style.webkitTransition = "all 0.5s ease-out";
                            break;
                    }
                }

            }();
