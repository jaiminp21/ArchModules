(function main(React, ReactNative, NativeBase, componentState, StyleSheet,
    Loader, navigate, CustomDivider, api, LinkField, responsiveHeight, responsiveFontSize,Button, Platform, require) {
    'use strict';


    var _react2 = React;
    var _reactNative = ReactNative;
    var _nativebase = NativeBase;
    var titleSize = 3.2;

    var styles = StyleSheet.create({
        container: {
            flex: 0.8,
            zIndex: 0,
            margin: "auto",
            width: "80%",
            marginLeft: "10%",
            marginTop: "10%",
            marginRight: "10%"
        },
        imageBg: {
            width: "100%",
            height: "100%",
        },
        scrollView: {
            flex: 1,
            backgroundColor: "white",
            padding: responsiveHeight(2),
            paddingLeft: 0,
            paddingRight: 0,
        },
        mainSubContainer: {
            paddingBottom: responsiveHeight(2),
            paddingLeft: responsiveHeight(1.5)
        },
        labelText: {
            fontSize: responsiveFontSize(titleSize),
            textAlign: "justify",
            paddingBottom: responsiveHeight(2),
            color: "#337E98"
        },
        mainContainer: {
            justifyContent: "flex-start", backgroundColor: "white", padding: responsiveHeight(1)
        },
        grayLine: {
            marginLeft: responsiveHeight(1), marginRight: responsiveHeight(1)
        },
        usernameContainer: {
            marginTop: responsiveHeight(1),
            // backgroundColor: "#FAFAFA",
            borderRadius: 1,
            padding: responsiveHeight(2.2),
            paddingTop: 0,
        },
        iosStyle: {
            paddingTop: 10
        },
        logoHeight: {
            height: responsiveHeight(10)
        },
        block: {
            flex: 1
        }
        , usernameSubcontainer: {
            marginTop: responsiveHeight(1.5)
        },
        colorGray: {
            color: "gray"
        },
        textInput: {
            borderWidth: 0.9,
            backgroundColor: "white",
            borderColor: "gray",
            textAlignVertical: "center",
            padding: responsiveHeight(0.3)
        },
        saveButton: {
            fontSize: responsiveFontSize(2),
            fontWeight: "normal",
            padding: responsiveHeight(0.9),
            color: "white",
            borderWidth: responsiveHeight(0.1),
            borderColor: "#015EBF",
            backgroundColor: "green"
        },
        saveButtonContainer: {
            marginTop: responsiveHeight(1.2),
            padding: responsiveHeight(2.2)
        },
        saveButtonSubContainer: {
            marginTop: responsiveHeight(2)
        },
        passwordContainer: {
            marginTop: responsiveHeight(1.5)
        },
        passwordSubcontainer: {
            marginTop: responsiveHeight(3)
        }

    });



    function showLoading(localState) {
        localState.setState({ isLoading: true });
    }

    function hideLoading(localState) {
        //console.warn("hide Loading");
        localState.setState({ isLoading: false });
    }

    function loginCall(localState) {
        var userJsonData = { "loginName": localState.state.userName, "password": localState.state.password };

        showLoading(localState);

        componentState.localStorage.getData("LoginData").then(function (result) {
            //console.warn(result);
            var result = JSON.parse(result);
            if (result && result.antiForgeryToken) {
                //console.warn(result);
                hideLoading(localState);
                //const { navigate } = this.props.navigation;
                navigate('AccountSummary');
            } else {
                //console.warn("Login");
                // http://192.168.1.11/UI/api/Authentication/LogIn
                api.fetchAsync("https://cfsfiserv.com/QEUATSMT/api/Authentication/LogIn",
                    "POST",
                    {
                        'Content-Type': 'application/json',
                    },
                    JSON.stringify(userJsonData)
                ).then(function (loginresult) {

                    //console.warn("Login Result");
                    //console.warn(loginresult);

                    if (!loginresult.antiForgeryToken) {
                        hideLoading(localState);
                        var message = "Invalid username and password"
                        if (loginresult.message) {
                            message = loginresult.message;
                        }
                        _nativebase.Toast.show({
                            text: message,
                            position: 'bottom',
                            buttonText: 'Okay',
                            duration: 5000,
                            type: 'danger'
                        });
                        return false;
                    }

                    localState.setState({
                        antiForgeryToken: loginresult.antiForgeryToken,
                        sessionTimeout: loginresult.sessionTimeout,
                        sessionExpiredText: loginresult.sessionExpiredText
                    }, function () { hideLoading(localState) });

                    loginresult["username"] = localState.state.userName;

                    componentState.localStorage.saveData("LoginData", loginresult).then(function (result1) {
                    });

                    componentState.localStorage.getData("LoginData").then(function (result1) {
                        //console.warn("Get LoginData");
                        //console.warn(result1);
                    });

                    if (loginresult.antiForgeryToken) {
                        navigate('AccountSummary');
                    } else {

                        var message = "Invalid username and password"
                        _nativebase.Toast.show({
                            text: message,
                            position: 'bottom',
                            buttonText: 'Okay',
                            duration: 5000,
                            type: 'danger'
                        });
                    }

                }).catch(function (err) {
                    alert(JSON.stringify(err));
                    alert("In Exception");
                    //hideLoading(localState);
                });
            }
        }).catch(function (err) {
            alert(JSON.stringify(err));
            // hideLoading(localState);
        });


    }


    function validateUser(localState) {
        if (localState.state.userName === '' || localState.state.userName == undefined) {
            _nativebase.Toast.show({
                text: 'Please enter Username',
                position: 'bottom',
                buttonText: 'Okay',
                duration: 5000,
                type: 'danger'
            });
        } else if (localState.state.password === '' || localState.state.password == undefined) {
            _nativebase.Toast.show({
                text: 'Please enter Password',
                position: 'bottom',
                buttonText: 'Okay',
                duration: 5000,
                type: 'danger'
            });
        } else {
            loginCall(localState)
        }
    }


    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var NewComponent = function (_React$Component) {
        _inherits(NewComponent, _React$Component);
        function NewComponent(props) {
            _classCallCheck(this, NewComponent);

            var _this = _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).call(this, props));

            _this.state = {
                userName: "",
                password: "",
                isLoading: false,
            }
            return _this;
        }

        _createClass(NewComponent, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                //console.warn('New component mounted');
                console.warn("Mounted SuccessFully");
            }
        }, {
            key: 'render',
            value: function render() {
                var _this = this;

                var i = 1;
                var isAndroid = Platform.OS == "android" ? true : false
                return _react2.createElement(_reactNative.ImageBackground, {
                    key: ++i,
                    source: {
                        uri: "https://raw.githubusercontent.com/jaiminp21/RemoteComponent/master/bridge.jpg",
                    }, style: styles.imageBg 
                },[
                    [
                        _react2.createElement(_reactNative.Image, {
                            style: isAndroid ? styles.logoHeight : [styles.logoHeight, styles.iosStyle]
                            , key: ++i,
                            source: {
                                uri: "https://raw.githubusercontent.com/jaiminp21/RemoteComponent/master/Screen%20Shot%202019-01-30%20at%209.46.54%20AM%20(1).png",
                            }
                        }
                        ),
                        _react2.createElement(_reactNative.View, { style: styles.container, key: ++i },
                            [

                                _react2.createElement(Loader, { key: ++i, isLoading: _this.state.isLoading }
                                    , [
                                    ]),

                                _react2.createElement(_reactNative.ScrollView, { key: ++i, style: styles.scrollView },
                                    [
                                        _react2.createElement(_reactNative.View, { key: ++i, style: styles.mainContainer },
                                            [
                                                _react2.createElement(_reactNative.View, { key: ++i, style: styles.mainSubContainer },
                                                    [

                                                        _react2.createElement(_reactNative.Text, { key: ++i, style: styles.labelText },
                                                            ["Secure Login"])
                                                        ,
                                                        _react2.createElement(CustomDivider, {
                                                            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl0423_Label_container",
                                                        }, null)
                                                    ]
                                                )
                                            ]),
                                        // inside the ScrollView 
                                        _react2.createElement(_reactNative.View, { key: ++i }, [

                                            _react2.createElement(_reactNative.View, { key: ++i, style: styles.block }, [

                                                _react2.createElement(_reactNative.View, { key: ++i }, [
                                                    _react2.createElement(_reactNative.View, {
                                                        key: ++i, style: styles.usernameContainer
                                                    },
                                                        [
                                                            _react2.createElement(_reactNative.View, { key: ++i, style: styles.usernameSubcontainer }, [
                                                                // 
                                                                _react2.createElement(_reactNative.View, { key: ++i }, [
                                                                    _react2.createElement(_reactNative.Text, { key: ++i, style: styles.colorGray }, [
                                                                        "User ID"
                                                                    ])
                                                                ]),
                                                                _react2.createElement(_reactNative.View, { key: ++i, style: styles.usernameSubcontainer }, [
                                                                    //
                                                                    _react2.createElement(_reactNative.TextInput, {
                                                                        key: ++i, style: styles.textInput,
                                                                        placeholder: "Enter User ID",
                                                                        onChangeText: function (val) {
                                                                            _this.setState({ userName: val })
                                                                        },
                                                                    }, [
                                                                            _this.state.userName
                                                                        ])
                                                                ])
                                                            ])
                                                            ,
                                                            _react2.createElement(_reactNative.View, { key: ++i, style: styles.passwordSubcontainer }, [
                                                                // 
                                                                _react2.createElement(_reactNative.View, { key: ++i }, [
                                                                    _react2.createElement(_reactNative.Text, {
                                                                        key: ++i, style: styles.colorGray,
                                                                    }, [
                                                                            "Password"
                                                                        ])
                                                                ]),
                                                                _react2.createElement(_reactNative.View, { key: ++i, style: styles.passwordContainer }, [
                                                                    //
                                                                    _react2.createElement(_reactNative.TextInput, {
                                                                        key: ++i, style: styles.textInput,
                                                                        placeholder: "Enter Password",
                                                                        secureTextEntry: true
                                                                        , onChangeText: function (val) {
                                                                            _this.setState({ password: val })
                                                                        },
                                                                    },
                                                                        [
                                                                            _this.state.password
                                                                        ])
                                                                ])
                                                            ])

                                                        ]),
                                                    _react2.createElement(_reactNative.View, { key: ++i, style: styles.saveButtonContainer }, [

                                                        _react2.createElement(_reactNative.View, { key: ++i, style: styles.saveButtonSubContainer }, [
                                                            // 
                                                            _react2.createElement(_reactNative.View, { key: ++i }, [
                                                                _react2.createElement(Button, {
                                                                    key: ++i, style: styles.saveButton,
                                                                    onPress: function () {
                                                                        validateUser(_this)
                                                                    }
                                                                }, [
                                                                        "Login",
                                                                    ])
                                                            ])
                                                            ,
                                                            _react2.createElement(_reactNative.View, {
                                                                key: ++i,
                                                                style: styles.usernameSubcontainer
                                                            }, [

                                                                    _react2.createElement(LinkField, {
                                                                        key: ++i,
                                                                        heading: "Forgot your password ?",
                                                                        onPress: function () {
                                                                        }
                                                                    }, [
                                                                            "Forgot your Password",
                                                                        ])
                                                                ])
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ]),
                                    ])
                            ]
                        )
                    ]
                ])

            }
        }]);

        return NewComponent;
    }(_react2.Component);

    return NewComponent
});
