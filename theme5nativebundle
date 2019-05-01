System.register('IDS.Web.UI.React/Field',["react", "./FormContext", "./RequiredValidator"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __rest = (this && this.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var React, FormContext_1, RequiredValidator_1, fieldComponentsMap, confirmationFieldComponentsMap;
    var __moduleName = context_1 && context_1.id;
    function createFieldComponent(childComponent, confirmation) {
        var Field = /** @class */ (function (_super) {
            __extends(Field, _super);
            function Field() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.handleChange = function (value) {
                    var _a;
                    var container = _this.context;
                    var names = _this.props.name.split(".");
                    var $spec = { $set: value };
                    for (var index = names.length - 1; index >= 0; index--)
                        $spec = (_a = {}, _a[names[index]] = $spec, _a);
                    container.handleModelChange($spec);
                };
                _this.handleTouched = function () {
                    var container = _this.context;
                    var name = _this.props.name;
                    container.markAsTouched([name]);
                };
                return _this;
            }
            Object.defineProperty(Field.prototype, "value", {
                get: function () {
                    return this.props.value;
                },
                enumerable: true,
                configurable: true
            });
            Field.prototype.validate = function (parentErrors) {
                var error = null;
                var _a = this.props, name = _a.name, validators = _a.validators;
                if (validators) {
                    var value = this.value;
                    for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
                        var validator = validators_1[_i];
                        error = validator.validate(value);
                        if (error !== null || (validator instanceof RequiredValidator_1.default && validator.isBlank(value)))
                            break;
                    }
                }
                parentErrors.set(name, error);
                return error === null;
            };
            ;
            Field.prototype.componentDidMount = function () {
                var container = this.context;
                container.registerComponent(this);
            };
            Field.prototype.componentWillUnmount = function () {
                var container = this.context;
                container.unregisterComponent(this);
            };
            Field.prototype.render = function () {
                var _a = this.props, name = _a.name, value = _a.value, validators = _a.validators, confirmationError = _a.confirmationError, restProps = __rest(_a, ["name", "value", "validators", "confirmationError"]);
                // Note: Leave the unused variables above to avoid passing them to the child component.
                var childProps = Object.assign.apply(undefined, [
                    {
                        value: this.value,
                        onChange: this.handleChange,
                        onTouched: this.handleTouched
                    },
                    restProps
                ].concat(validators.map(function (validator) { return validator.getProps(); })));
                return React.createElement(childComponent, childProps);
            };
            Field.contextType = FormContext_1.default;
            return Field;
        }(React.PureComponent));
        if (!confirmation)
            return Field;
        return /** @class */ (function (_super) {
            __extends(ConfirmationField, _super);
            function ConfirmationField(props) {
                var _this = _super.call(this, props) || this;
                _this.handleChange = function (value) {
                    var container = _this.context;
                    _this.setState({ value: value }, function () { container.validateForm(); });
                };
                var initialValue;
                switch (typeof props.value) {
                    case "string":
                        initialValue = "";
                        break;
                    case "boolean":
                        initialValue = false;
                        break;
                    default:
                        initialValue = null;
                        break;
                }
                _this.state = { value: initialValue };
                return _this;
            }
            Object.defineProperty(ConfirmationField.prototype, "value", {
                get: function () {
                    return this.state.value;
                },
                enumerable: true,
                configurable: true
            });
            ConfirmationField.prototype.validate = function (parentErrors) {
                _super.prototype.validate.call(this, parentErrors);
                var _a = this.props, name = _a.name, value = _a.value, confirmationError = _a.confirmationError;
                if (parentErrors.get(name) === null) {
                    if (value === this.state.value)
                        return true;
                    parentErrors.set(name, confirmationError);
                }
                return false;
            };
            return ConfirmationField;
        }(Field));
    }
    function getFieldComponent(childComponent, confirmation) {
        var map = confirmation ? confirmationFieldComponentsMap : fieldComponentsMap;
        var fieldComponent = map.get(childComponent);
        if (!fieldComponent) {
            fieldComponent = createFieldComponent(childComponent, confirmation);
            map.set(childComponent, fieldComponent);
        }
        return fieldComponent;
    }
    exports_1("getFieldComponent", getFieldComponent);
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (FormContext_1_1) {
                FormContext_1 = FormContext_1_1;
            },
            function (RequiredValidator_1_1) {
                RequiredValidator_1 = RequiredValidator_1_1;
            }
        ],
        execute: function () {
            fieldComponentsMap = new Map();
            confirmationFieldComponentsMap = new Map();
        }
    };
});
System.register('IDS.Web.UI.React/Form',["react", "immutability-helper", "./FormContext"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, immutability_helper_1, FormContext_1, Form;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (immutability_helper_1_1) {
                immutability_helper_1 = immutability_helper_1_1;
            },
            function (FormContext_1_1) {
                FormContext_1 = FormContext_1_1;
            }
        ],
        execute: function () {
            Form = /** @class */ (function (_super) {
                __extends(Form, _super);
                function Form(props) {
                    var _this = _super.call(this, props) || this;
                    _this.components = [];
                    _this.state = {
                        touched: new Set(),
                        errors: new Map(),
                        valid: true
                    };
                    return _this;
                }
                Form.prototype.registerComponent = function (component) {
                    this.components.push(component);
                };
                Form.prototype.unregisterComponent = function (component) {
                    this.components.splice(this.components.indexOf(component), 1);
                };
                Object.defineProperty(Form.prototype, "valid", {
                    get: function () {
                        return this.state.valid;
                    },
                    enumerable: true,
                    configurable: true
                });
                Form.prototype.getError = function (fieldName) {
                    var _a = this.state, touched = _a.touched, errors = _a.errors;
                    return touched.has(fieldName)
                        ? errors.get(fieldName)
                        : null;
                };
                Form.prototype.handleModelChange = function ($spec) {
                    this.props.onModelChange($spec);
                };
                Form.prototype.markAsTouched = function (fieldNames) {
                    this.setState(function (state) {
                        var touched = immutability_helper_1.default(state.touched, {
                            $add: fieldNames || Array.from(state.errors.keys())
                        });
                        return state.touched !== touched ? { touched: touched } : null;
                    });
                };
                Form.prototype.setError = function (fieldName, error) {
                    this.setState(function (state) {
                        var errors = immutability_helper_1.default(state.errors, {
                            $add: [[fieldName, error]]
                        });
                        return state.errors !== errors ? { errors: errors } : null;
                    });
                };
                Form.prototype.validateForm = function () {
                    var errors = new Map();
                    var valid = this.components.reduce(function (valid, component) { return component.validate(errors) && valid; }, true);
                    this.setState({ errors: errors, valid: valid });
                };
                Form.prototype.componentDidMount = function () {
                    this.validateForm();
                };
                Form.prototype.componentDidUpdate = function (prevProps) {
                    if (this.props.model !== prevProps.model)
                        this.validateForm();
                };
                Form.prototype.render = function () {
                    return (React.createElement(FormContext_1.default.Provider, { value: this }, this.props.children(this)));
                };
                return Form;
            }(React.Component));
            exports_1("default", Form);
        }
    };
});
System.register('IDS.Web.UI.React/FormatValidator',["./Validator"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Validator_1, FormatValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Validator_1_1) {
                Validator_1 = Validator_1_1;
            }
        ],
        execute: function () {
            FormatValidator = /** @class */ (function (_super) {
                __extends(FormatValidator, _super);
                function FormatValidator(errorMessage) {
                    var _this = _super.call(this) || this;
                    _this.errorMessage = errorMessage;
                    return _this;
                }
                FormatValidator.prototype.validate = function (value) {
                    var errorMessage = this.errorMessage;
                    return value === undefined || value === "undefined"
                        ? errorMessage
                        : null;
                };
                return FormatValidator;
            }(Validator_1.default));
            exports_1("default", FormatValidator);
        }
    };
});
System.register('IDS.Web.UI.React/FormContext',["react"], function (exports_1, context_1) {
    "use strict";
    var React, FormContext;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            FormContext = React.createContext(undefined);
            exports_1("default", FormContext);
        }
    };
});
/// <reference path="../src/Resources/Scripts/ids.d.ts" />
System.register('IDS.Web.UI.React/MaxLengthValidator',["./Validator"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Validator_1, MaxLengthValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Validator_1_1) {
                Validator_1 = Validator_1_1;
            }
        ],
        execute: function () {
            MaxLengthValidator = /** @class */ (function (_super) {
                __extends(MaxLengthValidator, _super);
                function MaxLengthValidator(errorMessage, maxLength) {
                    var _this = _super.call(this) || this;
                    _this.errorMessage = errorMessage;
                    _this.maxLength = maxLength;
                    return _this;
                }
                MaxLengthValidator.prototype.getProps = function () {
                    var maxLength = this.maxLength;
                    return maxLength > 0 ? { maxLength: maxLength } : {};
                };
                MaxLengthValidator.prototype.validate = function (value) {
                    var maxLength = this.maxLength, actualLength = value.length;
                    return maxLength > 0 && actualLength > maxLength
                        ? IDS.detokenizePlainText({ maxLength: maxLength, actualLength: actualLength }, this.errorMessage)
                        : null;
                };
                return MaxLengthValidator;
            }(Validator_1.default));
            exports_1("default", MaxLengthValidator);
        }
    };
});
/// <reference path="../src/Resources/Scripts/ids.d.ts" />
System.register('IDS.Web.UI.React/MinLengthValidator',["./Validator"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Validator_1, MinLengthValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Validator_1_1) {
                Validator_1 = Validator_1_1;
            }
        ],
        execute: function () {
            MinLengthValidator = /** @class */ (function (_super) {
                __extends(MinLengthValidator, _super);
                function MinLengthValidator(errorMessage, minLength) {
                    var _this = _super.call(this) || this;
                    _this.errorMessage = errorMessage;
                    _this.minLength = minLength;
                    return _this;
                }
                MinLengthValidator.prototype.getProps = function () {
                    var minLength = this.minLength;
                    return minLength > 0 ? { minLength: minLength } : {};
                };
                MinLengthValidator.prototype.validate = function (value) {
                    var minLength = this.minLength, actualLength = value.length;
                    return minLength > 0 && actualLength < minLength
                        ? IDS.detokenizePlainText({ minLength: minLength, actualLength: actualLength }, this.errorMessage)
                        : null;
                };
                return MinLengthValidator;
            }(Validator_1.default));
            exports_1("default", MinLengthValidator);
        }
    };
});
/// <reference path="../src/Resources/Scripts/ids.d.ts" />
System.register('IDS.Web.UI.React/MinValueValidator',["./Validator"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Validator_1, MinValueValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Validator_1_1) {
                Validator_1 = Validator_1_1;
            }
        ],
        execute: function () {
            MinValueValidator = /** @class */ (function (_super) {
                __extends(MinValueValidator, _super);
                function MinValueValidator(errorMessage, minValue) {
                    var _this = _super.call(this) || this;
                    _this.errorMessage = errorMessage;
                    _this.minValue = minValue;
                    return _this;
                }
                MinValueValidator.prototype.getProps = function () {
                    var minValue = this.minValue;
                    return minValue !== null ? { minValue: minValue } : {};
                };
                MinValueValidator.prototype.validate = function (value) {
                    var minValue = this.minValue;
                    return minValue !== null && value < minValue
                        ? IDS.detokenizePlainText({ minValue: minValue }, this.errorMessage)
                        : null;
                };
                return MinValueValidator;
            }(Validator_1.default));
            exports_1("default", MinValueValidator);
        }
    };
});
System.register('IDS.Web.UI.React/ReactElement',["react"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, ReactElement;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            ReactElement = /** @class */ (function (_super) {
                __extends(ReactElement, _super);
                function ReactElement() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.id = ReactElement.getNextId();
                    return _this;
                }
                ReactElement.getNextId = function () {
                    this.nextId++;
                    return "ctl" + this.nextId;
                };
                ReactElement.nextId = 0;
                return ReactElement;
            }(React.Component));
            exports_1("default", ReactElement);
        }
    };
});
System.register('IDS.Web.UI.React/ReactNativePlatform',["react", "react-native", "react-navigation", "IDS.Web.UI.React/NativeControls/NativeDrawer"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, react_navigation_1, NativeDrawer_1, AppContainer, TopLevelNavigator, App, styles, listModules, navigationRoutes;
    var __moduleName = context_1 && context_1.id;
    function bootstrap(views, templates) {
        return new Promise(function (resolve, reject) {
            var templatePromises = templates.map(function (template) {
                return System.import(template.moduleName).then(function (module) {
                    var baseViewComponentType = module.default;
                    var ViewTemplateComponent = /** @class */ (function (_super) {
                        __extends(ViewTemplateComponent, _super);
                        function ViewTemplateComponent() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        ViewTemplateComponent.prototype.render = function () {
                            return React.createElement(react_native_1.View, { id: template.config.moduleId, style: { flex: 1, backgroundColor: '#F5FCFF', borderColor: 'red' } }, template.render(this));
                        };
                        return ViewTemplateComponent;
                    }(baseViewComponentType));
                    template.component = ViewTemplateComponent;
                    return template;
                });
            });
            Promise.all(templatePromises).then(function (templates) {
                Promise.all(views.map(function (view) {
                    return System.import(view.moduleName).then(function (module) {
                        var baseViewComponentType = module.default;
                        var viewTemplate = templates.find(function (c) { return c.id === view.templateId; });
                        var ViewComponent = /** @class */ (function (_super) {
                            __extends(ViewComponent, _super);
                            function ViewComponent() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            ViewComponent.prototype.render = function () {
                                return viewTemplate
                                    ? view.render(this, viewTemplate)
                                    : view.render(this, null);
                            };
                            return ViewComponent;
                        }(baseViewComponentType));
                        var element = React.createElement(ViewComponent, { key: view.moduleName, config: view.config, style: {
                                flex: 1,
                                backgroundColor: 'powderblue',
                                borderColor: 'green'
                            } });
                        var moduleName = view.moduleName;
                        navigationRoutes[view.config.route.path] = {
                            screen: function () {
                                return element;
                            }
                        };
                        return element;
                    });
                })).then(function (views) {
                    resolve(React.createElement(App, null, views));
                });
            }).catch(function (error) { return reject(error); });
        });
    }
    exports_1("bootstrap", bootstrap);
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            },
            function (react_navigation_1_1) {
                react_navigation_1 = react_navigation_1_1;
            },
            function (NativeDrawer_1_1) {
                NativeDrawer_1 = NativeDrawer_1_1;
            }
        ],
        execute: function () {
            App = /** @class */ (function (_super) {
                __extends(App, _super);
                function App(props) {
                    var _this = _super.call(this, props) || this;
                    var firstRoute;
                    for (var key in navigationRoutes) {
                        firstRoute = key;
                        break;
                    }
                    TopLevelNavigator = react_navigation_1.createDrawerNavigator(navigationRoutes, {
                        initialRoute: firstRoute,
                        drawerPosition: 'left',
                        contentComponent: NativeDrawer_1.default,
                        defaultNavigationOptions: {
                            headerStyle: {
                                backgroundColor: '#f4511e'
                            }
                        }
                    });
                    AppContainer = react_navigation_1.createAppContainer(TopLevelNavigator);
                    Router.init('Account Summary');
                    return _this;
                }
                App.prototype.componentDidMount = function () {
                    //this.props.router &&
                    //	this.props.router.go({ routeName: "IDS.Banking.Web.React/AccountSummaryModule" });
                };
                App.prototype.render = function () {
                    return (React.createElement(AppContainer, { style: { flex: 1 }, ref: function (navigatorRef) {
                            Router.setNavigator(navigatorRef, react_navigation_1.NavigationActions);
                        } })
                    //<View style={{ flex: 1, }}>
                    //	<Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' }} style={{tintColor: 'black', top:10, right:10, width:50, height:50}}/>
                    //<AppContainer style={{ flex: 2, }} ref={navigatorRef => {
                    //}}>
                    //	<Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png' }}
                    //		style={{ width: 50, height: 50 }} />
                    //	<View style={{ flex: 2 }}>
                    //		{this.props.children}
                    //	</View>
                    //</AppContainer>
                    //</View>
                    );
                };
                return App;
            }(React.Component));
            exports_1("default", App);
            styles = {
                viewTemplate: {},
                view: {}
            };
            listModules = [];
            navigationRoutes = {};
        }
    };
});
System.register('IDS.Web.UI.React/RegexPatternValidator',["./Validator"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Validator_1, RegexPatternValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Validator_1_1) {
                Validator_1 = Validator_1_1;
            }
        ],
        execute: function () {
            RegexPatternValidator = /** @class */ (function (_super) {
                __extends(RegexPatternValidator, _super);
                function RegexPatternValidator(errorMessage, regexPattern) {
                    var _this = _super.call(this) || this;
                    _this.errorMessage = errorMessage;
                    _this.regexPattern = regexPattern;
                    return _this;
                }
                RegexPatternValidator.prototype.getProps = function () {
                    var regexPattern = this.regexPattern;
                    return regexPattern ? { pattern: regexPattern } : {};
                };
                RegexPatternValidator.prototype.validate = function (value) {
                    var match = value.match(new RegExp(this.regexPattern));
                    return !match || match[0].length < value.length
                        ? this.errorMessage
                        : null;
                };
                return RegexPatternValidator;
            }(Validator_1.default));
            exports_1("default", RegexPatternValidator);
        }
    };
});
System.register('IDS.Web.UI.React/RequiredValidator',["./Validator"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Validator_1, RequiredValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Validator_1_1) {
                Validator_1 = Validator_1_1;
            }
        ],
        execute: function () {
            RequiredValidator = /** @class */ (function (_super) {
                __extends(RequiredValidator, _super);
                function RequiredValidator(errorMessage, required) {
                    var _this = _super.call(this) || this;
                    _this.errorMessage = errorMessage;
                    _this.required = required;
                    return _this;
                }
                RequiredValidator.prototype.getProps = function () {
                    return this.required ? { required: true } : {};
                };
                RequiredValidator.prototype.isBlank = function (value) {
                    return value === "" || value === null || value === false;
                };
                RequiredValidator.prototype.validate = function (value) {
                    return this.required && this.isBlank(value)
                        ? this.errorMessage
                        : null;
                };
                return RequiredValidator;
            }(Validator_1.default));
            exports_1("default", RequiredValidator);
        }
    };
});
System.register('IDS.Web.UI.React/Validator',[], function (exports_1, context_1) {
    "use strict";
    var Validator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Validator = /** @class */ (function () {
                function Validator() {
                }
                Validator.prototype.getProps = function () {
                    return {};
                };
                return Validator;
            }());
            exports_1("default", Validator);
        }
    };
});
/// <reference path="../src/Resources/Scripts/ids.d.ts" />
System.register('IDS.Web.UI.React/ValidCharsValidator',["./Validator"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Validator_1, ValidCharsValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Validator_1_1) {
                Validator_1 = Validator_1_1;
            }
        ],
        execute: function () {
            ValidCharsValidator = /** @class */ (function (_super) {
                __extends(ValidCharsValidator, _super);
                function ValidCharsValidator(errorMessage, validChars) {
                    var _this = _super.call(this) || this;
                    _this.errorMessage = errorMessage;
                    _this.validChars = validChars;
                    return _this;
                }
                ValidCharsValidator.prototype.validate = function (value) {
                    var match = typeof value === "string" && value.match(new RegExp("[^" + this.validChars + "]", "i"));
                    return match
                        ? IDS.detokenizePlainText({ invalidChar: match[0] }, this.errorMessage)
                        : null;
                };
                return ValidCharsValidator;
            }(Validator_1.default));
            exports_1("default", ValidCharsValidator);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeText',["react", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, NativeText;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {
            NativeText = /** @class */ (function (_super) {
                __extends(NativeText, _super);
                function NativeText(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onPress = function (e) {
                        _this.props.onPress(e);
                        _this.setState({ changed: true });
                    };
                    _this.state = { changed: false };
                    return _this;
                }
                NativeText.prototype.render = function () {
                    var _a = this.props, value = _a.value, style = _a.style, keyboardAppearance = _a.keyboardAppearance, spellCheck = _a.spellCheck, textContentType = _a.textContentType, scrollEnabled = _a.scrollEnabled, enablesReturnKeyAutomatically = _a.enablesReturnKeyAutomatically, clearTextOnFocus = _a.clearTextOnFocus, clearButtonMode = _a.clearButtonMode, numberOfLines = _a.numberOfLines, underlineColorAndroid = _a.underlineColorAndroid, lineBreakMode = _a.lineBreakMode, ellipsizeMode = _a.ellipsizeMode, allowFontScaling = _a.allowFontScaling, disabled = _a.disabled;
                    return (React.createElement(react_native_1.Text, { style: style, keyboardAppearance: keyboardAppearance, spellCheck: spellCheck, textContentType: textContentType, scrollEnabled: scrollEnabled, onPress: this.onPress, enablesReturnKeyAutomatically: enablesReturnKeyAutomatically, clearTextOnFocus: clearTextOnFocus, clearButtonMode: clearButtonMode, numberOfLines: numberOfLines, underlineColorAndroid: underlineColorAndroid, lineBreakMode: lineBreakMode, ellipsizeMode: ellipsizeMode, allowFontScaling: allowFontScaling, disabled: disabled }, value));
                };
                return NativeText;
            }(React.PureComponent));
            exports_1("default", NativeText);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeButton',["react", "react-native", "IDS.Web.UI.React/FormContext"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, FormContext_1, NativeButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            },
            function (FormContext_1_1) {
                FormContext_1 = FormContext_1_1;
            }
        ],
        execute: function () {
            NativeButton = /** @class */ (function (_super) {
                __extends(NativeButton, _super);
                function NativeButton() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.handleClick = function (e) {
                        var _a = _this.props, checkFormValidity = _a.checkFormValidity, onPress = _a.onPress;
                        if (checkFormValidity) {
                            var container = _this.context;
                            if (container && !container.valid) {
                                // Show all validation errors:
                                container.markAsTouched();
                                return;
                            }
                        }
                        _this.props.onClick(_this.props.clickArgument);
                    };
                    return _this;
                }
                NativeButton.prototype.render = function () {
                    var _a = this.props, accessibilityLabel = _a.accessibilityLabel, style = _a.style, title = _a.title, disabled = _a.disabled;
                    return (React.createElement(react_native_1.TouchableOpacity, { title: title, style: { alignSelf: 'stretch', height: 40, backgroundColor: 'blue' }, accessibilityLabel: accessibilityLabel, disabled: disabled, onPress: this.handleClick },
                        React.createElement(react_native_1.Text, { style: style, disabled: disabled }, title)));
                };
                NativeButton.contextType = FormContext_1.default;
                return NativeButton;
            }(React.PureComponent));
            exports_1("default", NativeButton);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeSelectList',["react", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, NativeSelectList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {
            NativeSelectList = /** @class */ (function (_super) {
                __extends(NativeSelectList, _super);
                function NativeSelectList() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.handleChange = function (itemValue, itemIndex) {
                        _this.props.onChange(itemValue, itemIndex);
                    };
                    return _this;
                }
                NativeSelectList.prototype.render = function () {
                    var _this = this;
                    return (React.createElement(react_native_1.Picker, { selectedValue: this.props.selectedValue, style: this.props.style, mode: this.props.mode, prompt: this.props.prompt, enabled: this.props.enabled, onValueChange: this.handleChange }, this.props.Items.map(function (item) {
                        return React.createElement(react_native_1.Picker.Item, { itemStyle: _this.props.itemStyle, label: item.label, key: item.label, value: item.label });
                    })));
                };
                return NativeSelectList;
            }(React.Component));
            exports_1("default", NativeSelectList);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeContainer',["react", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var React, react_native_1, NativeContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {
            NativeContainer = /** @class */ (function (_super) {
                __extends(NativeContainer, _super);
                function NativeContainer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                NativeContainer.prototype.render = function () {
                    var _this = this;
                    var style = this.props.style;
                    return (React.createElement(react_native_1.View, __assign({ ref: function (c) { return (_this.root = c); } }, this.props, { style: style }), this.props.children));
                };
                return NativeContainer;
            }(React.PureComponent));
            exports_1("NativeContainer", NativeContainer);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeTextBox',["react", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, NativeTextBox;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {
            NativeTextBox = /** @class */ (function (_super) {
                __extends(NativeTextBox, _super);
                function NativeTextBox(props) {
                    var _this = _super.call(this, props) || this;
                    _this.handleTextChange = function (e) {
                        _this.props.onChangeText(e.text);
                        _this.setState({ changed: true });
                    };
                    _this.handleBlur = function () {
                        if (_this.state.changed) {
                            _this.setState({ changed: false });
                        }
                    };
                    _this.handleClearClick = function () {
                        _this.props.onChange("");
                    };
                    _this.state = { changed: false };
                    return _this;
                }
                NativeTextBox.prototype.render = function () {
                    var _a = this.props, style = _a.style, value = _a.value, textContentType = _a.textContentType, returnKeyLabel = _a.returnKeyLabel, editable = _a.editable, defaultValue = _a.defaultValue, autoCapitalize = _a.autoCapitalize, keyboardType = _a.keyboardType, multiline = _a.multiline, placeholder = _a.placeholder, secureTextEntry = _a.secureTextEntry, autoCorrect = _a.autoCorrect;
                    return (React.createElement(react_native_1.TextInput, { style: style, onChangeText: this.handleTextChange, onBlur: this.handleBlur, placeholder: placeholder, autoCorrect: autoCorrect, autoCapitalize: autoCapitalize, keyboardType: keyboardType, multiline: multiline, returnKeyLabel: returnKeyLabel, secureTextEntry: secureTextEntry, value: value, defaultValue: defaultValue, textContentType: textContentType, editable: editable }));
                };
                return NativeTextBox;
            }(React.PureComponent));
            exports_1("default", NativeTextBox);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeDataList',["react", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var React, react_native_1, NativeDataList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {
            NativeDataList = /** @class */ (function (_super) {
                __extends(NativeDataList, _super);
                function NativeDataList(props) {
                    var _this = _super.call(this, props) || this;
                    _this.handleClick = function (item) {
                        if (_this.props.onClick)
                            _this.props.onClick(item);
                    };
                    _this._onExpand = function (item, ind) {
                        if (item.hasOwnProperty('items')) {
                            var data = _this.state.data;
                            data[ind]['expanded'] = !data[ind]['expanded'];
                            _this.setState({ data: data });
                        }
                    };
                    _this.groupBy = function (objectArray, property) {
                        return objectArray.reduce(function (acc, obj) {
                            var key = obj[property];
                            if (!acc[key]) {
                                acc[key] = [];
                            }
                            acc[key].push(obj);
                            return acc;
                        }, {});
                    };
                    _this.listItemClick = function (e, key) {
                        if (_this.props.onClick)
                            _this.props.onClick(e);
                        _this.togglePanel(key);
                    };
                    _this.togglePanel = function (key) {
                        var _a;
                        _this.setState({
                            selection: __assign({}, _this.state.selection, (_a = {}, _a[key] = !_this.state.selection[key], _a))
                        });
                    };
                    var data = [];
                    _this.state = {
                        selection: {},
                        initial: _this.props.itemsSource,
                    };
                    for (var ind in props.itemsSource) {
                        var obj = props.itemsSource[ind];
                        obj['expanded'] = obj.hasOwnProperty('items');
                        data.push(obj);
                    }
                    return _this;
                    //this.state = {
                    //	data
                    //}
                }
                NativeDataList.prototype.render = function () {
                    var _this = this;
                    var groupedItems = this.props.groupsSource
                        ? this.groupBy(this.props.itemsSource, this.props.groupKey)
                        : this.props.itemsSource;
                    var children = this.props.children;
                    var _a = this.props;
                    return (React.createElement(react_native_1.FlatList, { data: this.props.itemsSource, renderItem: function (_a) {
                            var item = _a.item, index = _a.index;
                            return (React.createElement(react_native_1.View, null, _this.props.groupsSource
                                ? _this.props.groupsSource.map(function (group) {
                                    var groupId = group[_this.props.groupId];
                                    var groupText = group[_this.props.groupText];
                                    return (groupedItems[groupId] && groupedItems[groupId].length !== 0 &&
                                        React.createElement(react_native_1.View, { key: groupId, style: {} },
                                            React.createElement(react_native_1.View, { style: { paddingTop: 0, paddingRight: 24, paddingBottom: 0, paddingLeft: 24, backgroundColor: '#F5F5F5', borderTopWidth: 1, borderTopColor: '#d7d7d7', borderBottomWidth: 1, borderBottomColor: "#d7d7d7", fontSize: 20.8, lineHeight: 28.8 } },
                                                React.createElement(react_native_1.Text, null, groupText)),
                                            groupedItems[groupId].map(function (item) {
                                                return (React.createElement(react_native_1.TouchableOpacity, { key: _this.props.itemKey(item), onPress: function () { return _this.listItemClick(item, _this.props.itemKey(item)); }, style: { paddingTop: 6, paddingRight: 24, paddingBottom: 6, paddingLeft: 24, borderBottomWidth: 1, borderBottomColor: "#d7d7d7" } }, children(item)));
                                            })));
                                })
                                : React.createElement(react_native_1.View, { style: {} }, groupedItems.map(function (item) {
                                    return (React.createElement(react_native_1.View, { key: _this.props.itemKey(item) }, children(item)));
                                }))));
                        } }));
                    //if (this.props.expandable) {
                    //	return (
                    //		<FlatList
                    //			data={this.state.data}
                    //			extraData={this.state}
                    //			renderItem={this.props.groupSource ? ({ item, index }) => (
                    //				<View>
                    //					<TouchableOpacity onPress={() => this._onExpand(item, index)} style={{
                    //						backgroundColor: '#E8E8E8',
                    //						padding: 8
                    //					}} key={index}>
                    //						<Text style={{ fontSize: 16 }}>{item.acType}</Text>
                    //					</TouchableOpacity>
                    //					{console.log({ label: item.label, expanded: item.expanded })}
                    //					{item.expanded === true &&
                    //						item.hasOwnProperty('items') &&
                    //						item.items.map((subItem, subIndex) => (
                    //							<TouchableOpacity onPress={() => this.handleClick(subItem)}
                    //								style={{
                    //									padding: 12,
                    //									backgroundColor: 'white',
                    //									borderColor: '#ccc',
                    //									borderBottomWidth: item.items.length - 1 === subIndex ? 0 : 1
                    //								}} key={subIndex + '' + subIndex}>
                    //								<View style={{ flexDirection: 'row' }}>
                    //									<Text style={{
                    //										fontSize: 20,
                    //										color: '#4B759B'
                    //									}}>{subItem.name}</Text>
                    //									<View style={{ flex: 1 }} />
                    //									<Text style={{
                    //										fontSize: 20,
                    //										color: 'black'
                    //									}}>{subItem.balance}</Text>
                    //								</View>
                    //								<View style={{ flexDirection: 'row', marginTop: 2 }}>
                    //									<Text style={{
                    //										fontSize: 14,
                    //										color: 'black'
                    //									}}>{subItem.xType}</Text>
                    //									<View style={{ flex: 1 }} />
                    //									<Text style={{
                    //										fontSize: 14,
                    //										color: 'black'
                    //									}}>{subItem.availableType === ''
                    //										? subItem.outStanding
                    //										: subItem.availableType + ' Balance'}</Text>
                    //								</View>
                    //							</TouchableOpacity>
                    //						))}
                    //				</View>
                    //			) : <View>No group Source</View>} />
                    //	);
                    //} else {
                    //	return (
                    //		<FlatList
                    //			data={this.state.data}
                    //			extraData={this.state}
                    //			renderItem={this.props.groupSource ? ({ item, index }) => (
                    //				<View>
                    //					<TouchableOpacity onPress={() => this._onExpand(item, index)} style={{
                    //						backgroundColor: '#E8E8E8',
                    //						padding: 8
                    //					}} key={index}>
                    //						<Text style={{ fontSize: 16 }}>{item.acType}</Text>
                    //					</TouchableOpacity>
                    //					{console.log({ label: item.label, expanded: item.expanded })}
                    //					{item.expanded === true &&
                    //						item.hasOwnProperty('items') &&
                    //						item.items.map((subItem, subIndex) => (
                    //							<TouchableOpacity onPress={() => this.handleClick(subItem)}
                    //								style={{
                    //									padding: 12,
                    //									backgroundColor: 'white',
                    //									borderColor: '#ccc',
                    //									borderBottomWidth: item.items.length - 1 === subIndex ? 0 : 1
                    //								}} key={subIndex + '' + subIndex}>
                    //								<View style={{ flexDirection: 'row' }}>
                    //									<Text style={{
                    //										fontSize: 20,
                    //										color: '#4B759B'
                    //									}}>{subItem.name}</Text>
                    //									<View style={{ flex: 1 }} />
                    //									<Text style={{
                    //										fontSize: 20,
                    //										color: 'black'
                    //									}}>{subItem.balance}</Text>
                    //								</View>
                    //								<View style={{ flexDirection: 'row', marginTop: 2 }}>
                    //									<Text style={{
                    //										fontSize: 14,
                    //										color: 'black'
                    //									}}>{subItem.xType}</Text>
                    //									<View style={{ flex: 1 }} />
                    //									<Text style={{
                    //										fontSize: 14,
                    //										color: 'black'
                    //									}}>{subItem.availableType === ''
                    //										? subItem.outStanding
                    //										: subItem.availableType + ' Balance'}</Text>
                    //								</View>
                    //							</TouchableOpacity>
                    //						))}
                    //				</View>
                    //			) : <View>No group Source</View>} />
                    //	);;
                    //}
                };
                return NativeDataList;
            }(React.Component));
            exports_1("default", NativeDataList);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeDecimalTextBox',["react", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, NativeDecimalTextBox;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {
            NativeDecimalTextBox = /** @class */ (function (_super) {
                __extends(NativeDecimalTextBox, _super);
                //private inputRef: React.RefObject<HTMLInputElement>;
                function NativeDecimalTextBox(props) {
                    var _this = _super.call(this, props) || this;
                    _this.handleTextChange = function (value) {
                        var input = value;
                        var parsed = _this.parseNumber(input);
                        if (_this.props.onChangeText) {
                            _this.props.onChangeText(input);
                            if (typeof parsed !== "number")
                                _this.props.onChangeText(undefined);
                            _this.setState({ changed: true });
                        }
                    };
                    _this.handleBlur = function () {
                        _this.reformat();
                        if (_this.state.changed) {
                            _this.setState({ changed: false });
                        }
                    };
                    _this.handleClearClick = function () {
                        _this.props.onChange(undefined);
                    };
                    //this.inputRef = React.createRef() as React.RefObject<HTMLInputElement>;
                    _this.state = {
                        changed: false,
                    };
                    return _this;
                }
                NativeDecimalTextBox.prototype.reformat = function () {
                    var element = this.props.value;
                    var value = this.parseNumber(element);
                    if (value === null || typeof value === "string")
                        this.props.onChangeText(undefined);
                    else {
                        this.props.onChangeText(value);
                        value = this.formatNumber(value);
                    }
                };
                NativeDecimalTextBox.prototype.formatNumber = function (value) {
                    if (value === null)
                        return '';
                    var m = value.toFixed(this.props.fractionalDigits).match(/^(-?)(\d{1,3})((?:\d{3})*)(\.\d*)?$/);
                    return m[1] + m[2] + (this.props.groupDigits ? m[3].replace(/(\d{3})/g, ',$1') : m[3]) + (m[4] || '');
                };
                /**
                * Attempts to parse a specified string as a number.
                * @param value The string to parse.
                * @returns null if the string is empty or contains only white space characters;
                * the parsed amount if the string contains a valid number;
                * the string if the string does not contain a valid number.
                */
                NativeDecimalTextBox.prototype.parseNumber = function (value) {
                    if (value) {
                        value = value.replace(/\s/g, ''); // Ignore all white space characters.
                        if (!value)
                            return null;
                        var pattern = '^' +
                            '-?' +
                            ("(?=.*\\d)(\\d{1,3}(,?\\d{3})*)?(\\.\\d{0," + this.props.fractionalDigits + "}0*)?$");
                        if (!new RegExp(pattern).test(value))
                            return value;
                        value = value.replace(new RegExp("[,]", 'g'), '');
                        var max = 1e9 - 1 / Math.pow(10, this.props.fractionalDigits);
                        return Math.max(Math.min(parseFloat(value), max), -max);
                    }
                };
                NativeDecimalTextBox.prototype.render = function () {
                    var _a = this.props, style = _a.style, value = _a.value, textContentType = _a.textContentType, returnKeyLabel = _a.returnKeyLabel, editable = _a.editable, defaultValue = _a.defaultValue, autoCapitalize = _a.autoCapitalize, keyboardType = _a.keyboardType, multiline = _a.multiline, placeholder = _a.placeholder, secureTextEntry = _a.secureTextEntry, autoCorrect = _a.autoCorrect;
                    return (React.createElement(react_native_1.TextInput, { style: style, value: value, onChangeText: this.handleTextChange, onBlur: this.handleBlur, placeholder: placeholder, autoCorrect: autoCorrect, autoCapitalize: autoCapitalize, keyboardType: keyboardType, multiline: multiline, returnKeyLabel: returnKeyLabel, secureTextEntry: secureTextEntry, defaultValue: defaultValue, textContentType: textContentType, editable: editable }));
                };
                return NativeDecimalTextBox;
            }(React.PureComponent));
            exports_1("default", NativeDecimalTextBox);
        }
    };
});
/// <reference path="../../IDS.Web/src/Resources/Scripts/jquery.d.ts" />
/// <reference path="../../IDS.Web/src/Resources/Scripts/OrccMessageBus.ts" />
/// <reference path="../../IDS.Web/src/Resources/Scripts/orcc.router.ts" />
/// <reference path="../../IDS.Banking.Retail.Web/src/Views/AccountSummaryModel.ts" />
/// <reference path="../../IDS.Web/src/Resources/Scripts/HttpService.d.ts" />
/// <reference path="../../IDS.System/src/Web/AjaxRequestEndpoint.d.ts" />
System.register('IDS.Banking.Web.React/AccountSummaryModule',["react", "IDS.Banking.Web/Models/AccountModel", "IDS.Banking.Web/Models/AccountTypeModel", "IDS.Banking.Retail.Web/Views/AccountSummaryModel", "immutability-helper", "IDS.Web/Resources/Scripts/HttpService"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, AccountModel_1, AccountTypeModel_1, AccountSummaryModel_1, immutability_helper_1, HttpService_1, AccountSummaryModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (AccountModel_1_1) {
                AccountModel_1 = AccountModel_1_1;
            },
            function (AccountTypeModel_1_1) {
                AccountTypeModel_1 = AccountTypeModel_1_1;
            },
            function (AccountSummaryModel_1_1) {
                AccountSummaryModel_1 = AccountSummaryModel_1_1;
            },
            function (immutability_helper_1_1) {
                immutability_helper_1 = immutability_helper_1_1;
            },
            function (HttpService_1_1) {
                HttpService_1 = HttpService_1_1;
            }
        ],
        execute: function () {/// <reference path="../../IDS.Web/src/Resources/Scripts/jquery.d.ts" />
            /// <reference path="../../IDS.Web/src/Resources/Scripts/OrccMessageBus.ts" />
            /// <reference path="../../IDS.Web/src/Resources/Scripts/orcc.router.ts" />
            /// <reference path="../../IDS.Banking.Retail.Web/src/Views/AccountSummaryModel.ts" />
            /// <reference path="../../IDS.Web/src/Resources/Scripts/HttpService.d.ts" />
            /// <reference path="../../IDS.System/src/Web/AjaxRequestEndpoint.d.ts" />
            AccountSummaryModule = /** @class */ (function (_super) {
                __extends(AccountSummaryModule, _super);
                function AccountSummaryModule(props) {
                    var _this = _super.call(this, props) || this;
                    _this.shouldRenderModule = false;
                    _this.closeSearch = function () {
                        _this.setState({
                            accountSummaryModel: immutability_helper_1.default(_this.state.accountSummaryModel, {
                                isSearchVisible: { $set: false },
                                searchString: { $set: "" },
                                selectedAccountTypeId: { $set: "" },
                            })
                        });
                    };
                    _this.openSearch = function () {
                        _this.setState({
                            accountSummaryModel: immutability_helper_1.default(_this.state.accountSummaryModel, {
                                isSearchVisible: { $set: true },
                            })
                        });
                    };
                    _this.handleModelChange = function ($spec) {
                        _this.setState({
                            accountSummaryModel: immutability_helper_1.default(_this.state.accountSummaryModel, $spec)
                        });
                    };
                    _this.reloadAccounts = function () {
                        var previousAccounts = _this.state.accountSummaryModel.accounts;
                        var endpoint = _this.props.config.getAccountsAt;
                        HttpService_1.default.get({ url: endpoint.url, token: endpoint.token })
                            .then(function (responseAccounts) {
                            var newAccountSummaryModel = _this.createAccountSummaryModel(responseAccounts, [], _this.props.config.accountTypes);
                            // Keep previously cached transactions:
                            newAccountSummaryModel.accounts.forEach(function (account) {
                                var previousAccount = previousAccounts.find(function (previousAccount) { return previousAccount.id === account.id; });
                                if (previousAccount && previousAccount.transactions) {
                                    account.transactions = previousAccount.transactions;
                                    account.transactions.forEach(function (transaction) {
                                        transaction.account = account;
                                    });
                                }
                            });
                            _this.setState(function (prevState) {
                                return {
                                    accountSummaryModel: newAccountSummaryModel,
                                    accountSelected: prevState.accountSelected
                                };
                            });
                        });
                    };
                    _this.selectAccount = function (e) {
                        _this.setState(function (prevState) {
                            return {
                                accountSummaryModel: prevState.accountSummaryModel
                            };
                        });
                        Router.go("Accounts/" + e.id, e);
                        _this.closeSearch();
                    };
                    _this.state = {
                        accountSummaryModel: _this.createAccountSummaryModel(_this.props.config.accounts, [], _this.props.config.accountTypes),
                        accountSelected: false,
                        noAccountsMessage: _this.props.config.accounts.length > 0 ? _this.props.config.noAccountsFoundMessage : _this.props.config.noAccountsAvailableMessage,
                    };
                    return _this;
                }
                AccountSummaryModule.prototype.componentDidMount = function () {
                    var _this = this;
                    Router.register({
                        route: this.props.config.route,
                        onEnter: function () {
                            _this.setState({ accountSelected: false });
                        },
                        onLeave: function () {
                            _this.setState({ accountSelected: true });
                        },
                    });
                    MessageBus.subscribe("ShowAccounts", function () {
                        _this.setState({ accountSelected: false });
                    });
                    MessageBus.subscribe("AccountNicknameChanged", function () {
                        _this.reloadAccounts();
                    });
                };
                AccountSummaryModule.prototype.createAccountSummaryModel = function (accounts, safeDepositBoxes, accountTypes) {
                    var accountSummary = new AccountSummaryModel_1.AccountSummaryModel(accounts.map(function (account) { return new AccountModel_1.AccountModel(account); }), safeDepositBoxes = [], accountTypes.map(function (accountType) { return new AccountTypeModel_1.AccountTypeModel(accountType); }));
                    accountSummary.selectedAccountTypeId = "";
                    accountSummary.searchString = "";
                    return accountSummary;
                };
                return AccountSummaryModule;
            }(React.Component));
            exports_1("default", AccountSummaryModule);
        }
    };
});
/// <reference path="../../../IDS.Banking.Web/src/Models/Modules.d.ts" />
System.register('IDS.Banking.Retail.Web/Views/AccountSummaryModel',[], function (exports_1, context_1) {
    "use strict";
    var AccountSummaryModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {/// <reference path="../../../IDS.Banking.Web/src/Models/Modules.d.ts" />
            AccountSummaryModel = /** @class */ (function () {
                function AccountSummaryModel(accounts, safeDepositBoxes, accountTypes) {
                    this.accounts = accounts;
                    this.assetAccounts = this.accounts.filter(function (account) { return account.isAsset; });
                    this.liabilityAccounts = this.accounts.filter(function (account) { return account.isLiability; });
                    this.totalAssetAvailableBalance =
                        this.assetAccounts.reduce(function (total, account) { return total + account.availableBalance; }, 0);
                    this.totalLiabilityLedgerBalance =
                        this.liabilityAccounts.reduce(function (total, account) { return total + account.normalizedLedgerBalance; }, 0);
                    this.safeDepositBoxes = safeDepositBoxes;
                    this.accountTypes = accountTypes;
                }
                Object.defineProperty(AccountSummaryModel.prototype, "filteredAccounts", {
                    get: function () {
                        var _this = this;
                        var lang = "en-US"; //$ ? $("html").attr("lang") || "en-US" : "en-US";
                        var accounts = this.accounts.filter(function (i) {
                            return (!_this.selectedAccountTypeId || i.typeId === _this.selectedAccountTypeId) &&
                                (i.nickname.toLocaleUpperCase(lang).indexOf(_this.searchString.toLocaleUpperCase(lang)) >= 0 ||
                                    i.accountNumber.indexOf(_this.searchString) >= 0);
                        });
                        return accounts;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AccountSummaryModel;
            }());
            exports_1("AccountSummaryModel", AccountSummaryModel);
        }
    };
});
/// <reference path="../../../IDS.System/src/Web/AjaxRequestEndpoint.d.ts"/>
System.register('IDS.Banking.Web/Models/AccountModel',[], function (exports_1, context_1) {
    "use strict";
    var AccountModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {/// <reference path="../../../IDS.System/src/Web/AjaxRequestEndpoint.d.ts"/>
            AccountModel = /** @class */ (function () {
                function AccountModel(model) {
                    this.id = '';
                    this.accountNumber = '';
                    this.isAsset = false;
                    this.isLiability = false;
                    this.type = '';
                    this.typeId = '';
                    this.description = '';
                    this.nickname = '';
                    this.ledgerBalance = null;
                    this.availableBalance = null;
                    this.availableCreditBalance = null;
                    this.hasDetails = false;
                    this.openDate = null;
                    this.maturityDate = null;
                    this.closeDate = null;
                    this.interestRate = null;
                    this.interestYearToDate = null;
                    this.loanAmount = null;
                    this.creditLimit = null;
                    this.paymentDueAmount = null;
                    this.paymentDueDate = null;
                    this.lastPaymentAmount = null;
                    this.lastPaymentDate = null;
                    this.payoffAmount = null;
                    this.getAt = null;
                    this.accountDetailsPageAt = null;
                    this.eStatementsAt = null;
                    this.transactionsAt = null;
                    this.changeNicknameAt = null;
                    this.transactions = null;
                    this.initialize(model);
                }
                AccountModel.prototype.initialize = function (model) {
                    for (var key in model) {
                        var value = model[key];
                        switch (key) {
                            case 'openDate':
                            case 'maturityDate':
                            case 'closeDate':
                            case 'paymentDueDate':
                            case 'lastPaymentDate':
                                if (value)
                                    value = new Date(value);
                                break;
                        }
                        this[key] = value;
                    }
                };
                Object.defineProperty(AccountModel.prototype, "normalizedLedgerBalance", {
                    get: function () {
                        return !this.isLiability || this.ledgerBalance === null ? this.ledgerBalance : -this.ledgerBalance;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AccountModel.prototype, "isLedgerBalanceNegative", {
                    get: function () {
                        return this.ledgerBalance < 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AccountModel.prototype, "isNormalizedLedgerBalanceNegative", {
                    get: function () {
                        return this.normalizedLedgerBalance < 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AccountModel.prototype, "isAvailableBalanceNegative", {
                    get: function () {
                        return this.availableBalance < 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AccountModel;
            }());
            exports_1("AccountModel", AccountModel);
        }
    };
});
System.register('IDS.Banking.Web/Models/AccountTypeModel',[], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AccountTypeModel;
    return {
        setters: [],
        execute: function () {
            AccountTypeModel = /** @class */ (function () {
                function AccountTypeModel(model) {
                    for (var key in model) {
                        var value = model[key];
                        this[key] = value;
                    }
                }
                return AccountTypeModel;
            }());
            exports_1("AccountTypeModel", AccountTypeModel);
        }
    };
});
//# sourceMappingURL=AccountTypeModel.js.map
System.register('IDS.Banking.Web/Models/TransactionModel',[], function (exports_1, context_1) {
    "use strict";
    var TransactionModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TransactionModel = /** @class */ (function () {
                function TransactionModel(account, model) {
                    this.account = null;
                    this.id = '';
                    this.transactionDate = null;
                    this.description = '';
                    this.amount = null;
                    this.newBalance = null;
                    this.isCheck = false;
                    this.checkNumber = '';
                    this.isPending = false;
                    this.account = account;
                    for (var key in model) {
                        var value = model[key];
                        switch (key) {
                            case 'effectiveDate':
                            case 'transactionDate':
                                value = new Date(value);
                                break;
                        }
                        this[key] = value;
                    }
                }
                Object.defineProperty(TransactionModel.prototype, "isAmountNegative", {
                    get: function () {
                        return this.amount < 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TransactionModel.prototype, "negatedAmount", {
                    get: function () {
                        return this.amount !== null ? -this.amount : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TransactionModel.prototype, "normalizedAmount", {
                    get: function () {
                        return this.amount !== null ? this.amount * this._normalizationSign : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TransactionModel.prototype, "isNormalizedAmountNegative", {
                    get: function () {
                        return this.normalizedAmount < 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TransactionModel.prototype, "isNewBalanceNegative", {
                    get: function () {
                        return this.newBalance < 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TransactionModel.prototype, "normalizedNewBalance", {
                    get: function () {
                        return this.newBalance !== null ? this.newBalance * this._normalizationSign : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TransactionModel.prototype, "isNormalizedNewBalanceNegative", {
                    get: function () {
                        return this.normalizedNewBalance < 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TransactionModel.prototype, "_normalizationSign", {
                    get: function () {
                        return this.account !== null && this.account.isLiability ? -1 : 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TransactionModel;
            }());
            exports_1("TransactionModel", TransactionModel);
        }
    };
});
/// <reference path="../../IDS.Web/src/Resources/Scripts/OrccMessageBus.ts" />
/// <reference path="../../IDS.Banking.Retail.Web/src/Views/TransactionHistoryModel.ts" />
/// <reference path="../../IDS.Web/src/Resources/Scripts/HttpService.d.ts" />
/// <reference path="../../IDS.Web/src/Resources/Scripts/Router.ts" />
System.register('IDS.Banking.Web.React/TransactionHistoryModule',["react", "IDS.Banking.Web/Models/TransactionModel", "immutability-helper", "IDS.Web/Resources/Scripts/HttpService", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, TransactionModel_1, immutability_helper_1, HttpService_1, react_native_1, TransactionHistoryModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (TransactionModel_1_1) {
                TransactionModel_1 = TransactionModel_1_1;
            },
            function (immutability_helper_1_1) {
                immutability_helper_1 = immutability_helper_1_1;
            },
            function (HttpService_1_1) {
                HttpService_1 = HttpService_1_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {/// <reference path="../../IDS.Web/src/Resources/Scripts/OrccMessageBus.ts" />
            /// <reference path="../../IDS.Banking.Retail.Web/src/Views/TransactionHistoryModel.ts" />
            /// <reference path="../../IDS.Web/src/Resources/Scripts/HttpService.d.ts" />
            /// <reference path="../../IDS.Web/src/Resources/Scripts/Router.ts" />
            TransactionHistoryModule = /** @class */ (function (_super) {
                __extends(TransactionHistoryModule, _super);
                function TransactionHistoryModule(props) {
                    var _this = _super.call(this, props) || this;
                    _this.clearSearch = function () {
                        var model = _this.props.config.transactionHistoryModel;
                        model.transactions = _this.state.transactionHistoryModel.transactions;
                        model.isSearchVisible = true;
                        _this.setState({
                            transactionHistoryModel: model,
                            transactionSearchCriteriaModel: _this.props.config.transactionSearchCriteriaModel,
                        });
                    };
                    _this.goBack = function () {
                        MessageBus.publish("BeforeShowAccounts");
                        _this.setState({
                            accountModel: null
                        });
                        MessageBus.publish("ShowAccounts");
                    };
                    _this.performSearch = function () {
                        _this.setState({
                            isSearching: true,
                        });
                        _this.getTransactions(_this.state.accountModel, _this.props.config.initialTransactionsCount, true, false);
                    };
                    _this.reloadTransactions = function () {
                        _this.setState({ errorNotification: null });
                        _this.getTransactions(_this.state.accountModel, _this.props.config.moreTransactionsCount, false, false);
                    };
                    _this.closeSearch = function () {
                        var data = _this.endOfPageInfo(_this.state.accountModel.transactions.length, false, false);
                        var model = _this.props.config.transactionHistoryModel;
                        model.transactions = _this.state.accountModel.transactions;
                        model.isSearchVisible = false;
                        _this.setState({
                            isSearching: false,
                            notification: data.notification,
                            showViewMoreButton: data.showButton,
                            transactionHistoryModel: model,
                            noTransactionsMessage: _this.props.config.noTransactionsAvailableMessage,
                            transactionSearchCriteriaModel: null,
                        });
                    };
                    _this.openSearch = function () {
                        _this.clearSearch();
                    };
                    _this.handleModelChange = function ($spec) {
                        _this.setState({
                            transactionSearchCriteriaModel: immutability_helper_1.default(_this.state.transactionSearchCriteriaModel, $spec)
                        });
                    };
                    _this.getTransactions = function (account, maxCount, isSearching, viewMore) {
                        MessageBus.publish("BusyIndicator", true);
                        var endpoint = account.transactionsAt;
                        HttpService_1.default.get({ url: endpoint.url, token: endpoint.token }, _this.buildQueryParams(isSearching, maxCount))
                            .then(function (response) {
                            var newTransactions = response.map(function (t) { return new TransactionModel_1.TransactionModel(account, t); });
                            var data = _this.endOfPageInfo(response.length, isSearching, viewMore);
                            if (isSearching) {
                                _this.setState({
                                    notification: data.notification,
                                    showViewMoreButton: data.showButton,
                                    transactionHistoryModel: immutability_helper_1.default(_this.state.transactionHistoryModel, {
                                        transactions: { $set: newTransactions },
                                    }),
                                    noTransactionsMessage: _this.props.config.noTransactionsFoundMessage,
                                });
                            }
                            else {
                                var model = _this.props.config.transactionHistoryModel;
                                model.transactions = newTransactions;
                                model.isSearchVisible = false;
                                account.transactions = newTransactions;
                                _this.setState({
                                    accountModel: account,
                                    showViewMoreButton: data.showButton,
                                    notification: data.notification,
                                    transactionHistoryModel: model,
                                    transactionSearchCriteriaModel: _this.props.config.transactionSearchCriteriaModel,
                                });
                            }
                            MessageBus.publish("BusyIndicator", false);
                            console.log("Transaction fetched");
                        })
                            .catch(function (error) {
                            var errorText = error.responseJSON.message || JSON.stringify(error.responseJSON.errors);
                            var newNotification = { text: errorText, type: "error" };
                            if (isSearching)
                                _this.setState({
                                    notification: newNotification,
                                    showViewMoreButton: false,
                                    transactionHistoryModel: immutability_helper_1.default(_this.state.transactionHistoryModel, {
                                        transactions: { $set: null },
                                    }),
                                });
                            else {
                                var error_1 = viewMore
                                    ? _this.props.config.additionalTransactionErrorMessage
                                    : _this.props.config.transactionErrorMessage;
                                _this.setState({ errorNotification: { text: error_1, type: "error" } });
                            }
                            MessageBus.publish("BusyIndicator", false);
                        });
                    };
                    _this.buildQueryParams = function (includeSearch, maxCount) {
                        var queryParams = [
                            ["maxCount", maxCount],
                            ["includePending", _this.props.config.transactionHistoryModel.includePending],
                            ["includeProcessed", _this.props.config.transactionHistoryModel.includeProcessed]
                        ];
                        if (includeSearch) {
                            var model = _this.state.transactionSearchCriteriaModel;
                            var days = _this.state.transactionSearchCriteriaModel.maxDays;
                            for (var key in model) {
                                var val = model[key];
                                switch (key) {
                                    case "maxDays":
                                        val = days === "-2" ? null : val;
                                        break;
                                    case "startDate":
                                    case "endDate":
                                        val = days === "-2" ? val : null;
                                        break;
                                    case "dateRanges":
                                    case "transactionTypes":
                                        val = null;
                                        break;
                                }
                                if (val)
                                    queryParams.push([key, val]);
                            }
                        }
                        else
                            queryParams.push(["maxDays", _this.props.config.transactionSearchCriteriaModel.maxDays]);
                        return queryParams;
                    };
                    _this.viewMore = function () {
                        _this.setState({ showViewMoreButton: false });
                        _this.getTransactions(_this.state.accountModel, _this.props.config.moreTransactionsCount, _this.state.isSearching, true);
                    };
                    _this.endOfPageInfo = function (count, isSearching, viewMore) {
                        if (count === 0)
                            return { notification: null, showButton: false };
                        var notificationText = "";
                        var buttonVisible = false;
                        if (count === _this.props.config.initialTransactionsCount && !viewMore)
                            buttonVisible = true;
                        else if (isSearching) {
                            if (count >= _this.props.config.moreTransactionsCount)
                                notificationText = _this.props.config.endOfSearchedTransactionsText;
                        }
                        else
                            notificationText = _this.props.config.endOfRecentTransactionsText;
                        var newNotification = notificationText === "" ? null : { text: notificationText, type: "info" };
                        return { notification: newNotification, showButton: buttonVisible };
                    };
                    _this.state = {
                        accountModel: null,
                        transactionHistoryModel: null,
                        notification: null,
                        noTransactionsMessage: _this.props.config.noTransactionsAvailableMessage,
                        errorNotification: null,
                        showViewMoreButton: false,
                        isSearching: false,
                        transactionSearchCriteriaModel: null,
                    };
                    return _this;
                }
                TransactionHistoryModule.prototype.componentDidMount = function () {
                    var _this = this;
                    Router.register({
                        route: this.props.config.route,
                        onEnter: function (account) {
                            _this.setState({
                                accountModel: account,
                                transactionHistoryModel: null,
                                notification: null,
                                errorNotification: null,
                                isSearching: false,
                                showViewMoreButton: false,
                                transactionSearchCriteriaModel: null,
                            });
                            if (!account.transactions) {
                                _this.getTransactions(account, _this.props.config.initialTransactionsCount, false, false);
                            }
                            else {
                                var data = _this.endOfPageInfo(account.transactions.length, false, false);
                                var model = _this.props.config.transactionHistoryModel;
                                model.transactions = account.transactions;
                                model.isSearchVisible = false;
                                _this.setState({
                                    showViewMoreButton: data.showButton,
                                    notification: data.notification,
                                    transactionHistoryModel: model,
                                });
                            }
                        },
                        onLeave: function () {
                            _this.setState({
                                accountModel: null
                            });
                        }
                    });
                    if (react_native_1.BackHandler) {
                        react_native_1.BackHandler.addEventListener('hardwareBackPress', function () {
                            _this.goBack();
                            return true;
                        });
                    }
                };
                return TransactionHistoryModule;
            }(React.Component));
            exports_1("default", TransactionHistoryModule);
        }
    };
});
/// <reference path="../../IDS.Web/src/Resources/Scripts/ids.d.ts"/>
/// <reference path="../../IDS.Web/src/Resources/Scripts/HttpService.d.ts" />
/// <reference path="../../IDS.Web/react/Modules.d.ts" />
/// <reference path="../src/models/modules.d.ts" />
System.register('IDS.Banking.Web.React/AccountOverviewModule',["react", "immutability-helper", "IDS.Web/Resources/Scripts/HttpService", "IDS.Banking.Web/Models/AccountModel", "IDS.Banking.Web/Models/EStatementsModel"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, immutability_helper_1, HttpService_1, AccountModel_1, EStatementsModel_1, AccountOverviewModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (immutability_helper_1_1) {
                immutability_helper_1 = immutability_helper_1_1;
            },
            function (HttpService_1_1) {
                HttpService_1 = HttpService_1_1;
            },
            function (AccountModel_1_1) {
                AccountModel_1 = AccountModel_1_1;
            },
            function (EStatementsModel_1_1) {
                EStatementsModel_1 = EStatementsModel_1_1;
            }
        ],
        execute: function () {/// <reference path="../../IDS.Web/src/Resources/Scripts/ids.d.ts"/>
            /// <reference path="../../IDS.Web/src/Resources/Scripts/HttpService.d.ts" />
            /// <reference path="../../IDS.Web/react/Modules.d.ts" />
            /// <reference path="../src/models/modules.d.ts" />
            AccountOverviewModule = /** @class */ (function (_super) {
                __extends(AccountOverviewModule, _super);
                function AccountOverviewModule(props) {
                    var _this = _super.call(this, props) || this;
                    _this.handleAccountListItemClick = function (account) {
                        Router.go("Accounts/" + account.id, account);
                    };
                    _this.handleDetailsButtonClick = function () {
                        _this.setState({
                            isDetailsDrawerVisible: true,
                            detailsAccountModel: _this.state.accountModel,
                        });
                    };
                    _this.handleEStatementsButtonClick = function () {
                        _this.setState({
                            isEStatementsDrawerVisible: true,
                        });
                        var accountId = _this.state.eStatementsModel ? _this.state.eStatementsModel.accountId : -1;
                        if (_this.state.accountModel.id !== accountId) {
                            MessageBus.publish("BusyIndicator", true);
                            var endpoint = _this.state.accountModel.eStatementsAt;
                            HttpService_1.default.get({ url: endpoint.url, token: endpoint.token })
                                .then(function (response) {
                                MessageBus.publish("BusyIndicator", false);
                                var responseModel = response;
                                var responseStatements = responseModel.eStatements.map(function (e) { return new EStatementsModel_1.EStatementModel(e); });
                                var model = _this.createEStatementsModel(responseStatements, _this.state.accountModel.id);
                                _this.setState({
                                    eStatementsModel: model,
                                });
                            });
                        }
                        else {
                            _this.setState({
                                isEStatementsDrawerVisible: true,
                            });
                        }
                    };
                    _this.handleRedirectButtonClick = function (endpoint) {
                        MessageBus.publish('BusyIndicator', true);
                        HttpService_1.default.get({ url: endpoint.url, token: endpoint.token })
                            .then(function (response) {
                            //Busy indicator should stay on the page until the redirect happens
                            window.location.href = response;
                        });
                    };
                    _this.handleDetailsDrawerClose = function () {
                        _this.setState({
                            isDetailsDrawerVisible: false,
                            detailsAccountModel: null,
                            isEditingNickname: false,
                            notification: null,
                        });
                    };
                    _this.handleDetailsFormModelChange = function ($spec) {
                        // Make the change to detailsAccountModel, not accountModel, to avoid affecting the overview content:
                        _this.setState({
                            detailsAccountModel: immutability_helper_1.default(_this.state.detailsAccountModel, $spec),
                        });
                    };
                    _this.handleEditNicknameButtonClick = function () {
                        _this.setState({
                            isEditingNickname: true,
                        });
                    };
                    _this.handleNicknameEditorSubmitButtonClick = function () {
                        MessageBus.publish("BusyIndicator", true);
                        var endpoint = _this.state.accountModel.changeNicknameAt;
                        HttpService_1.default.put({ url: endpoint.url, token: endpoint.token }, _this.state.detailsAccountModel.nickname)
                            .then(function () {
                            MessageBus.publish("BusyIndicator", false);
                            var newAccount = _this.state.accounts.find(function (account) { return account.id === _this.state.detailsAccountModel.id; });
                            if (newAccount !== null) {
                                newAccount.nickname = _this.state.detailsAccountModel.nickname;
                            }
                            _this.setState({
                                accountModel: immutability_helper_1.default(_this.state.accountModel, {
                                    nickname: { $set: _this.state.detailsAccountModel.nickname },
                                }),
                                accounts: immutability_helper_1.default(_this.state.accounts, {
                                    account: { $set: newAccount }
                                }),
                                isEditingNickname: false,
                                notification: null,
                            });
                            MessageBus.publish("AccountNicknameChanged", "");
                        })
                            .catch(function (error) {
                            MessageBus.publish("BusyIndicator", false);
                            var errorMessage = error.responseJSON ? error.responseJSON.message : _this.props.config.genericErrorMessage;
                            _this.setState({
                                notification: { text: errorMessage, type: "error" },
                            });
                        });
                    };
                    _this.handleNicknameEditorCancelButtonClick = function () {
                        _this.setState({
                            detailsAccountModel: _this.state.accountModel,
                            isEditingNickname: false,
                            notification: null,
                        });
                    };
                    _this.handleEStatementsDrawerClose = function () {
                        _this.setState({
                            isEStatementsDrawerVisible: false,
                        });
                    };
                    _this.createEStatementsModel = function (eStatements, accountId) {
                        var eStatementsList = new EStatementsModel_1.EStatementsModel(eStatements, accountId);
                        eStatementsList.eStatementYears.reverse();
                        if (eStatementsList.eStatementYears.length > 0)
                            eStatementsList.selectedEStatementYear = eStatementsList.eStatementYears[0].id;
                        return eStatementsList;
                    };
                    _this.handleEStatementsFormModelChange = function ($spec) {
                        _this.setState({
                            eStatementsModel: immutability_helper_1.default(_this.state.eStatementsModel, $spec),
                        });
                    };
                    _this.handleEStatementButtonClick = function (url) {
                        window.location.href = url;
                    };
                    _this.state = {
                        accountModel: null,
                        isDetailsDrawerVisible: false,
                        detailsAccountModel: null,
                        isEditingNickname: false,
                        notification: null,
                        isEStatementsDrawerVisible: false,
                        eStatementsModel: null,
                        accounts: _this.props.config.accounts.map(function (account) { return new AccountModel_1.AccountModel(account); }),
                    };
                    return _this;
                }
                AccountOverviewModule.prototype.componentDidMount = function () {
                    var _this = this;
                    Router.register({
                        route: this.props.config.route,
                        onEnter: function (accountModel) {
                            _this.setState({
                                accountModel: accountModel,
                            });
                        },
                        onLeave: function () {
                            // Cancel editing the nickname and close any open drawer:
                            _this.setState({
                                accountModel: null,
                                isDetailsDrawerVisible: false,
                                detailsAccountModel: null,
                                isEditingNickname: false,
                                notification: null,
                                isEStatementsDrawerVisible: false,
                            });
                        },
                    });
                };
                return AccountOverviewModule;
            }(React.Component));
            exports_1("default", AccountOverviewModule);
        }
    };
});
System.register('IDS.Banking.Web/Models/EStatementsModel',[], function (exports_1, context_1) {
    "use strict";
    var EStatementsModel, EStatementModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            EStatementsModel = /** @class */ (function () {
                function EStatementsModel(eStatements, accountId) {
                    var _this = this;
                    this.eStatementYears = [];
                    this.selectedEStatementYear = '';
                    this.accountId = '';
                    this.eStatements = eStatements;
                    this.accountId = accountId;
                    var set = new Set(eStatements.map(function (s) { return s.date.getFullYear().toString(); }));
                    set.forEach(function (year) { return _this.eStatementYears.push({ "id": year, "text": year }); });
                }
                Object.defineProperty(EStatementsModel.prototype, "filteredEStatements", {
                    get: function () {
                        var _this = this;
                        var statements = this.eStatements.filter(function (e) { return e.date.getFullYear().toString() === _this.selectedEStatementYear; });
                        // reverse the order so that the list will display the latest at the top of the list
                        statements.reverse();
                        return statements;
                    },
                    enumerable: true,
                    configurable: true
                });
                return EStatementsModel;
            }());
            exports_1("EStatementsModel", EStatementsModel);
            EStatementModel = /** @class */ (function () {
                function EStatementModel(model) {
                    this.date = null;
                    this.description = '';
                    this.url = '';
                    this.id = '';
                    for (var key in model) {
                        var value = model[key];
                        switch (key) {
                            case 'date':
                                value = new Date(value);
                                break;
                        }
                        this[key] = value;
                    }
                }
                return EStatementModel;
            }());
            exports_1("EStatementModel", EStatementModel);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/PopoverElement',["react", "react-native", "./ComputeGeometry", "./utils"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var React, react_native_1, ComputeGeometry_1, utils_1, PopoverElement, styles;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            },
            function (ComputeGeometry_1_1) {
                ComputeGeometry_1 = ComputeGeometry_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            PopoverElement = /** @class */ (function (_super) {
                __extends(PopoverElement, _super);
                function PopoverElement(props) {
                    var _this = _super.call(this, props) || this;
                    _this.measureLayout = function (_a) {
                        var _b = _a.nativeEvent.layout, width = _b.width, height = _b.height;
                        _this.setState({ width: width, height: height }, function () { return _this.computeStyles(_this.props); });
                    };
                    _this.state = {
                        // render offscren initially
                        containerStyle: {
                            top: -9999,
                            left: -9999,
                            maxWidth: _this.props.containerSize.width - _this.props.padding * 2,
                            maxHeight: _this.props.containerSize.height - _this.props.padding * 2,
                        },
                        arrowStyle: null,
                        width: 0,
                        height: 0,
                    };
                    return _this;
                }
                PopoverElement.prototype.computeStyles = function (_a) {
                    var arrowHeight = _a.arrowHeight, arrowWidth = _a.arrowWidth, containerSize = _a.containerSize, fromRect = _a.fromRect, padding = _a.padding, placement = _a.placement;
                    var offset = this.props.offset;
                    var _b = this.state, width = _b.width, height = _b.height;
                    var geom = ComputeGeometry_1.default({
                        contentSize: { width: width, height: height },
                        fromRect: fromRect,
                        containerSize: containerSize,
                        arrowSize: {
                            width: arrowWidth,
                            height: arrowHeight,
                        },
                        padding: padding,
                        placement: placement,
                    });
                    this.setState({
                        containerStyle: __assign({}, this.state.containerStyle, { top: geom.popoverOrigin.y + offset.y, left: geom.popoverOrigin.x + offset.x }),
                        arrowStyle: geom.arrowStyle,
                    });
                };
                PopoverElement.prototype.componentWillReceiveProps = function (nextProps) {
                    this.computeStyles(nextProps);
                    return false;
                };
                PopoverElement.prototype.render = function () {
                    var _a;
                    var _b = this.props, pointerEvents = _b.pointerEvents, component = _b.component, placement = _b.placement, arrowColor = _b.arrowColor;
                    var borderDirection = utils_1.capitalizeFirstLetter(utils_1.findDirectionWithoutColor(this.state.arrowStyle));
                    return (React.createElement(react_native_1.View, { style: [styles.abs, this.state.containerStyle] },
                        React.createElement(react_native_1.View, { onLayout: this.measureLayout }, React.createElement(component)),
                        React.createElement(react_native_1.View, { style: [
                                styles.abs,
                                this.state.arrowStyle,
                                (_a = {}, _a["border" + borderDirection + "Color"] = arrowColor, _a),
                            ], pointerEvents: pointerEvents })));
                };
                PopoverElement.defaultProps = {
                    pointerEvents: 'box-none',
                    offset: {
                        x: 0,
                        y: 0,
                    },
                };
                return PopoverElement;
            }(React.Component));
            exports_1("default", PopoverElement);
            styles = react_native_1.StyleSheet.create({
                abs: {
                    position: 'absolute',
                },
            });
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/PopoverContainer',["react", "react-native", "./PopoverElement", "prop-types"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var React, react_native_1, PopoverElement_1, prop_types_1, addKey, delKey, PopoverContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            },
            function (PopoverElement_1_1) {
                PopoverElement_1 = PopoverElement_1_1;
            },
            function (prop_types_1_1) {
                prop_types_1 = prop_types_1_1;
            }
        ],
        execute: function () {
            addKey = function (obj, key, value) {
                var _a;
                return (__assign({}, obj, (_a = {}, _a[key] = value, _a)));
            };
            delKey = function (obj, key) {
                var copy = Object.assign({}, obj);
                delete copy[key];
                return copy;
            };
            PopoverContainer = /** @class */ (function (_super) {
                __extends(PopoverContainer, _super);
                function PopoverContainer() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.state = {
                        registry: {},
                        containerSize: null,
                    };
                    _this.onRootLayout = function (_a) {
                        var _b = _a.nativeEvent.layout, width = _b.width, height = _b.height;
                        _this.setState({ containerSize: { width: width, height: height } });
                    };
                    _this.registerPopover = function (id, element, props) {
                        if (_this.state.containerSize === null) {
                            setTimeout(function () { return _this.registerPopover(id, element, props); });
                            return;
                        }
                        react_native_1.UIManager.measureLayout(element, react_native_1.findNodeHandle(_this._root), function (err) {
                            console.error(err);
                        }, function (x, y, width, height) {
                            _this.setState({
                                registry: addKey(_this.state.registry, id, {
                                    rect: { x: x, y: y, width: width, height: height },
                                    props: props,
                                }),
                            });
                        });
                    };
                    _this.unregisterPopover = function (id) {
                        _this.setState({ registry: delKey(_this.state.registry, id) });
                    };
                    return _this;
                }
                PopoverContainer.prototype.getChildContext = function () {
                    return {
                        registerPopover: this.registerPopover,
                        unregisterPopover: this.unregisterPopover,
                    };
                };
                PopoverContainer.prototype.render = function () {
                    var _this = this;
                    return (React.createElement(react_native_1.View, { ref: function (x) {
                            _this._root = x;
                        }, style: { flex: 1 }, onLayout: this.onRootLayout },
                        this.props.children,
                        Object.entries(this.state.registry).map(function (_a) {
                            var id = _a[0], _b = _a[1], rect = _b.rect, props = _b.props;
                            return React.createElement(PopoverElement_1.default, __assign({ key: id, containerSize: _this.state.containerSize, padding: _this.props.padding, fromRect: rect }, props));
                        })));
                };
                PopoverContainer.defaultProps = {
                    children: null,
                    padding: 0,
                };
                PopoverContainer.childContextTypes = {
                    registerPopover: prop_types_1.default.func,
                    unregisterPopover: prop_types_1.default.func,
                };
                return PopoverContainer;
            }(React.Component));
            exports_1("default", PopoverContainer);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativePopover',["react", "prop-types"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, prop_types_1, NativePopover;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (prop_types_1_1) {
                prop_types_1 = prop_types_1_1;
            }
        ],
        execute: function () {
            NativePopover = /** @class */ (function (_super) {
                __extends(NativePopover, _super);
                function NativePopover(props) {
                    var _this = _super.call(this, props) || this;
                    _this.setElementRef = function (x) {
                        _this._element = x;
                    };
                    return _this;
                }
                NativePopover.prototype.componentDidMount = function () {
                    if (!this.props.isVisible) {
                        return;
                    }
                    this.registerSelf();
                };
                NativePopover.prototype.componentDidUpdate = function (prevProps) {
                    if (prevProps.isVisible !== this.props.isVisible || prevProps.placement !== this.props.placement) {
                        if (this.props.isVisible) {
                            this.registerSelf();
                        }
                        else {
                            this.unregisterSelf();
                        }
                    }
                };
                NativePopover.prototype.componentWillUnmount = function () {
                    this.unregisterSelf();
                };
                NativePopover.prototype.registerSelf = function () {
                    var _this = this;
                    // delay to the next tick to guarantee layout
                    setTimeout(function () {
                        if (_this._element !== null) {
                            var _a = _this.props, arrowColor = _a.arrowColor, arrowWidth = _a.arrowWidth, arrowHeight = _a.arrowHeight, placement = _a.placement, component = _a.component, pointerEvents = _a.pointerEvents, offset = _a.offset;
                            //this.context.registerPopover(this._id, findNodeHandle(this._element), {
                            //	arrowColor,
                            //	arrowWidth,
                            //	arrowHeight,
                            //	placement,
                            //	component,
                            //	pointerEvents,
                            //	offset,
                            //});
                        }
                    });
                };
                NativePopover.prototype.unregisterSelf = function () {
                    //this.context.unregisterPopover(this._id);
                };
                NativePopover.prototype.render = function () {
                    var child = React.Children.only(this.props.children);
                    return React.cloneElement(child, {
                        ref: this.setElementRef,
                    });
                };
                NativePopover.contextTypes = {
                    registerPopover: prop_types_1.default.func,
                    unregisterPopover: prop_types_1.default.func,
                };
                NativePopover.defaultProps = {
                    children: null,
                    isVisible: true,
                    arrowColor: 'white',
                    arrowWidth: 15,
                    arrowHeight: 10,
                    placement: 'auto',
                    pointerEvents: 'box-none',
                    offset: {
                        x: 0,
                        y: 0,
                    },
                };
                return NativePopover;
            }(React.PureComponent));
            exports_1("default", NativePopover);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/ComputeGeometry',["./utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1, ComputeGeometry, computeTopGeometry, computeBottomGeometry, computeAutoGeometry;
    var __moduleName = context_1 && context_1.id;
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            ComputeGeometry = function (_a) {
                var contentSize = _a.contentSize, placement = _a.placement, fromRect = _a.fromRect, containerSize = _a.containerSize, arrowSize = _a.arrowSize, padding = _a.padding;
                var displayArea = {
                    x: padding,
                    y: padding,
                    width: containerSize.width - padding * 2,
                    height: containerSize.height - padding * 2,
                };
                var options = {
                    displayArea: displayArea,
                    fromRect: fromRect,
                    contentSize: contentSize,
                    arrowSize: arrowSize,
                };
                switch (placement) {
                    case utils_1.PLACEMENT_OPTIONS.TOP:
                        return computeTopGeometry(options);
                    case utils_1.PLACEMENT_OPTIONS.BOTTOM:
                        return computeBottomGeometry(options);
                    default:
                        return computeAutoGeometry(options);
                }
            };
            computeTopGeometry = function (_a) {
                var displayArea = _a.displayArea, fromRect = _a.fromRect, contentSize = _a.contentSize, arrowSize = _a.arrowSize;
                var popoverOrigin = new Point(Math.min(displayArea.x + displayArea.width - contentSize.width, Math.max(displayArea.x, fromRect.x + (fromRect.width - contentSize.width) / 2)), fromRect.y - contentSize.height - arrowSize.height);
                var anchorPoint = new Point(fromRect.x + fromRect.width / 2.0, fromRect.y);
                var arrowStyle = utils_1.getArrowStyle({
                    anchorPoint: anchorPoint,
                    popoverOrigin: popoverOrigin,
                    arrowSize: arrowSize,
                    placement: utils_1.PLACEMENT_OPTIONS.TOP,
                });
                return {
                    popoverOrigin: popoverOrigin,
                    arrowStyle: arrowStyle,
                    placement: utils_1.PLACEMENT_OPTIONS.TOP,
                };
            };
            computeBottomGeometry = function (_a) {
                var displayArea = _a.displayArea, fromRect = _a.fromRect, contentSize = _a.contentSize, arrowSize = _a.arrowSize;
                var popoverOrigin = new Point(Math.min(displayArea.x + displayArea.width - contentSize.width, Math.max(displayArea.x, fromRect.x + (fromRect.width - contentSize.width) / 2)), fromRect.y + fromRect.height + arrowSize.height);
                var anchorPoint = new Point(fromRect.x + fromRect.width / 2.0, fromRect.y + fromRect.height);
                var arrowStyle = utils_1.getArrowStyle({
                    anchorPoint: anchorPoint,
                    popoverOrigin: popoverOrigin,
                    arrowSize: arrowSize,
                    placement: utils_1.PLACEMENT_OPTIONS.BOTTOM,
                });
                return {
                    popoverOrigin: popoverOrigin,
                    arrowStyle: arrowStyle,
                    placement: utils_1.PLACEMENT_OPTIONS.BOTTOM,
                };
            };
            computeAutoGeometry = function (_a) {
                var displayArea = _a.displayArea, fromRect = _a.fromRect, contentSize = _a.contentSize, arrowSize = _a.arrowSize;
                var placementsToTry = [
                    computeBottomGeometry,
                    computeTopGeometry,
                ];
                var geom;
                // eslint-disable-next-line no-plusplus
                for (var i = 0; i < placementsToTry.length; i++) {
                    var placementFn = placementsToTry[i];
                    geom = placementFn({ displayArea: displayArea, fromRect: fromRect, contentSize: contentSize, arrowSize: arrowSize });
                    var popoverOrigin = geom.popoverOrigin;
                    if (popoverOrigin.x >= displayArea.x &&
                        popoverOrigin.x <=
                            displayArea.x + displayArea.width - contentSize.width &&
                        popoverOrigin.y >= displayArea.y &&
                        popoverOrigin.y <= displayArea.y + displayArea.height - contentSize.height) {
                        break;
                    }
                }
                return geom;
            };
            exports_1("default", ComputeGeometry);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeDatePicker',["react", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __rest = (this && this.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var React, react_native_1, isAndroid, NativeDatePicker;
    var __moduleName = context_1 && context_1.id;
    function noop() { }
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {
            isAndroid = react_native_1.Platform.OS === 'android';
            NativeDatePicker = /** @class */ (function (_super) {
                __extends(NativeDatePicker, _super);
                function NativeDatePicker() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.state = {
                        showIOSModal: false,
                        date: undefined
                    };
                    _this.handlePressed = function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a, startDate, onError, date, _b, action, year, month, day, newDate, error_1;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _a = this.props, startDate = _a.startDate, onError = _a.onError;
                                    date = this.state.date;
                                    if (!isAndroid) return [3 /*break*/, 5];
                                    _c.label = 1;
                                case 1:
                                    _c.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, react_native_1.DatePickerAndroid.open({
                                            date: date || startDate
                                        })];
                                case 2:
                                    _b = _c.sent(), action = _b.action, year = _b.year, month = _b.month, day = _b.day;
                                    newDate = new Date(year, month, day);
                                    if (action !== react_native_1.DatePickerAndroid.dismissedAction) {
                                        this.setState(function () { return ({ date: date, startDate: date }); });
                                        this.props.onDateChanged(this.getDateObj());
                                    }
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _c.sent();
                                    onError(error_1);
                                    return [3 /*break*/, 4];
                                case 4: return [3 /*break*/, 6];
                                case 5:
                                    this.setState(function () { return ({ showIOSModal: true }); });
                                    _c.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); };
                    _this.getDateObj = function () {
                        var date = _this.state.date;
                        return {
                            date: date,
                            year: date ? date.getFullYear() : '',
                            day: date ? ("" + date.getDate()).padStart(2, '0') : '',
                            month: date ? ("" + (date.getMonth() + 1)).padStart(2, '0') : ''
                        };
                    };
                    _this.handleModalClose = function () {
                        _this.setState(function () { return ({ showIOSModal: false }); }, function () {
                            var onDateChanged = _this.props.onDateChanged;
                            onDateChanged(_this.getDateObj());
                        });
                    };
                    _this.handleDateChange = function (date) { return _this.setState({ date: date, startDate: date }); };
                    return _this;
                }
                NativeDatePicker.prototype.render = function () {
                    var _a = this.state, showIOSModal = _a.showIOSModal, date = _a.date;
                    var _b = this.props, startDate = _b.startDate, maxDate = _b.maxDate, minDate = _b.minDate, modalButtonText = _b.modalButtonText, renderDate = _b.renderDate, modalOverlayStyle = _b.modalOverlayStyle, modalStyle = _b.modalStyle, modalButtonStyle = _b.modalButtonStyle, modalBtnContainer = _b.modalBtnContainer, style = _b.style, props = __rest(_b, ["startDate", "maxDate", "minDate", "modalButtonText", "renderDate", "modalOverlayStyle", "modalStyle", "modalButtonStyle", "modalBtnContainer", "style"]);
                    return (React.createElement(react_native_1.TouchableOpacity, { style: style, onPress: this.handlePressed },
                        React.createElement(react_native_1.Modal, { animationType: 'slide', transparent: true, visible: showIOSModal, onRequestClose: this.handleModalClose },
                            React.createElement(react_native_1.View, { style: [styles.overlay, modalOverlayStyle] },
                                React.createElement(react_native_1.View, { style: [styles.modal, modalStyle] },
                                    React.createElement(react_native_1.View, { style: [styles.modalBtnContainer, modalBtnContainer] },
                                        React.createElement(react_native_1.Button, { style: [modalButtonStyle], title: modalButtonText, onPress: this.handleModalClose })),
                                    React.createElement(react_native_1.DatePickerIOS, __assign({ mode: 'date', date: date || startDate, onDateChange: this.handleDateChange, maximumDate: maxDate, minimumDate: minDate }, props))))),
                        renderDate(this.getDateObj())));
                };
                NativeDatePicker.defaultProps = {
                    renderDate: function (_a) {
                        var year = _a.year, month = _a.month, day = _a.day, date = _a.date;
                        if (date) {
                            var str = year + "-" + month + "-" + day;
                            return React.createElement(react_native_1.Text, null, str);
                        }
                        return null;
                    },
                    startDate: new Date(),
                    onError: noop,
                    onDateChanged: noop,
                    maxDate: undefined,
                    minDate: undefined,
                    modalButtonText: 'Done'
                };
                return NativeDatePicker;
            }(React.Component));
            exports_1("default", NativeDatePicker);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeDrawer',["react", "react-native", "react-native-transitiongroup"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, react_native_transitiongroup_1, NativeDrawer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            },
            function (react_native_transitiongroup_1_1) {
                react_native_transitiongroup_1 = react_native_transitiongroup_1_1;
            }
        ],
        execute: function () {
            NativeDrawer = /** @class */ (function (_super) {
                __extends(NativeDrawer, _super);
                function NativeDrawer(props) {
                    var _this = _super.call(this, props) || this;
                    _this.handleCloseClick = function () {
                    };
                    _this.state = {
                        visible: false,
                    };
                    return _this;
                }
                NativeDrawer.prototype.render = function () {
                    var _a = this.props, id = _a.id, className = _a.className, closeButtonClassName = _a.closeButtonClassName, closeButtonLabel = _a.closeButtonLabel, overlayClassName = _a.overlayClassName, slideDuration = _a.slideDuration, width = _a.width, children = _a.children;
                    if (!children)
                        children = React.createElement(react_native_1.Text, null, "No Children");
                    var isTransitioning = function (state) { return state === "entering" || state === "exiting"; };
                    return (React.createElement(react_native_transitiongroup_1.default, null,
                        React.createElement(react_native_transitiongroup_1.FadeInOutTransition, { key: "loader" })));
                };
                return NativeDrawer;
            }(React.PureComponent));
            exports_1("default", NativeDrawer);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeNotification',["react", "react-native", "../ReactElement"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, ReactElement_1, NativeNotification;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            },
            function (ReactElement_1_1) {
                ReactElement_1 = ReactElement_1_1;
            }
        ],
        execute: function () {
            NativeNotification = /** @class */ (function (_super) {
                __extends(NativeNotification, _super);
                function NativeNotification() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                NativeNotification.prototype.render = function () {
                    var message = this.props.content ? this.props.content.text : "";
                    return (React.createElement(react_native_1.Text, null, message));
                };
                return NativeNotification;
            }(ReactElement_1.default));
            exports_1("default", NativeNotification);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeReadOnlyField',["react", "../ReactElement"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, ReactElement_1, NativeReadonlyField;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (ReactElement_1_1) {
                ReactElement_1 = ReactElement_1_1;
            }
        ],
        execute: function () {
            NativeReadonlyField = /** @class */ (function (_super) {
                __extends(NativeReadonlyField, _super);
                function NativeReadonlyField(props) {
                    var _this = _super.call(this, props) || this;
                    _this.textValue = _this.props.value;
                    _this.isBindingOneTime = _this.props.bindingMode === "OneTime";
                    return _this;
                }
                NativeReadonlyField.prototype.render = function () {
                    if (!this.isBindingOneTime)
                        this.textValue = this.props.value;
                    return React.createElement(Text, { className: this.props.className }, this.textValue);
                };
                return NativeReadonlyField;
            }(ReactElement_1.default));
            exports_1("default", NativeReadonlyField);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NativeImage',["react", "react-native"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, react_native_1, NativeImage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (react_native_1_1) {
                react_native_1 = react_native_1_1;
            }
        ],
        execute: function () {
            NativeImage = /** @class */ (function (_super) {
                __extends(NativeImage, _super);
                function NativeImage(props) {
                    return _super.call(this, props) || this;
                }
                NativeImage.prototype.render = function () {
                    return (React.createElement(react_native_1.Image, { source: { uri: this.props.imageUrl } }));
                };
                return NativeImage;
            }(React.Component));
            exports_1("default", NativeImage);
        }
    };
});
System.register('IDS.Portal.Web.React/Templates/Theme5/MainModuleTemplate',["react"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var React, ReactModuleTemplate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            ReactModuleTemplate = /** @class */ (function (_super) {
                __extends(ReactModuleTemplate, _super);
                function ReactModuleTemplate(props) {
                    var _this = _super.call(this, props) || this;
                    _this.show = function () {
                        _this.setState({ isVisible: true });
                    };
                    _this.hide = function () {
                        _this.setState({ isVisible: false });
                    };
                    _this.state = { isVisible: true };
                    return _this;
                }
                return ReactModuleTemplate;
            }(React.Component));
            exports_1("default", ReactModuleTemplate);
        }
    };
});
System.register('IDS.Web/Resources/Scripts/HttpService',[], function (exports_1, context_1) {
    "use strict";
    var FetchHttpService, instance;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            FetchHttpService = /** @class */ (function () {
                function FetchHttpService() {
                    this.antiforgeryToken = global.globalToken;
                    this.headers = {
                        "Accept": "text/javascript",
                        "Content-Type": "application/json",
                        "User-Agent": "Mobile IOS 18.1; Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
                    };
                }
                FetchHttpService.prototype.setAntiForgeryToken = function (antiforgeryToken) {
                    if (antiforgeryToken) {
                        this.antiforgeryToken = antiforgeryToken;
                    }
                };
                FetchHttpService.prototype.delete = function (endpoint, queryParams) {
                    return new Promise(function (resolve, reject) {
                        //fetch.deleteWithToken(endpoint.url, endpoint.token ? endpoint.token : "", resolve, reject);
                    });
                };
                FetchHttpService.prototype.get = function (endpoint, queryParams) {
                    var _this = this;
                    var arr = new Array();
                    if (queryParams)
                        queryParams.forEach(function (parm) {
                            if (parm[1] instanceof Date) {
                                parm[1] = parm[1].toISOString().replace("T00:00:00.000Z", "");
                            }
                            arr.push({ name: parm[0], value: parm[1] });
                        });
                    return new Promise(function (resolve, reject) {
                        _this.addTokensToHeader(_this.antiforgeryToken, endpoint.token);
                        fetch(global.baseUrl + endpoint.url, {
                            method: 'GET',
                            headers: _this.headers,
                            credentials: "include"
                        }).then(function (response) {
                            return response.json();
                        })
                            .then(function (result) {
                            resolve(result);
                        }).catch(function (error) {
                            return error.text();
                        });
                    });
                };
                FetchHttpService.prototype.addTokensToHeader = function (antiforgery, token) {
                    if (antiforgery) {
                        this.headers["X-CSRF-TOKEN"] = antiforgery;
                    }
                    if (token) {
                        this.headers["X-Request-Token"] = token;
                    }
                };
                FetchHttpService.prototype.post = function (endpoint, body, queryParams) {
                    return new Promise(function (resolve, reject) {
                        //$.postJsonWithToken(endpoint.url, endpoint.token ? endpoint.token : "", body, resolve, reject);
                    });
                };
                FetchHttpService.prototype.put = function (endpoint, body, queryParams) {
                    return new Promise(function (resolve, reject) {
                        //$.putJsonWithToken(endpoint.url, endpoint.token ? endpoint.token : "", body, resolve, reject);
                    });
                };
                return FetchHttpService;
            }());
            exports_1("FetchHttpService", FetchHttpService);
            instance = new FetchHttpService();
            exports_1("default", instance);
        }
    };
});
System.register('IDS.Web.UI.React/NativeControls/NavigationService',["react-navigation"], function (exports_1, context_1) {
    "use strict";
    var react_navigation_1, NavigationService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_navigation_1_1) {
                react_navigation_1 = react_navigation_1_1;
            }
        ],
        execute: function () {
            NavigationService = /** @class */ (function () {
                function NavigationService() {
                    var _this = this;
                    this.setTopLevelNavigator = function (navigatorRef) {
                        _this.navigator = navigatorRef;
                    };
                    this.navigate = function (routeName, params) {
                        _this.navigator.dispatch(react_navigation_1.NavigationActions.navigate({
                            routeName: routeName,
                            params: params
                        }));
                    };
                }
                return NavigationService;
            }());
            exports_1("default", NavigationService);
        }
    };
});
/// <reference path="ids.d.ts" />
var Router;
/// <reference path="ids.d.ts" />
(function (Router) {
    var handlers = [];
    var currentState;
    var history = [null];
    var navigator = null;
    var navigationActions = null;
    function init(initialPath) {
        currentState = history[0];
        if (currentState === null) {
            currentState = { path: initialPath };
            history[0] = currentState;
        }
    }
    Router.init = init;
    function register(handler) {
        handlers.push(handler);
        if (hasMatchingRoute(handler))
            handler.onEnter(currentState.data);
    }
    Router.register = register;
    function go(path, data) {
        onLeave();
        currentState = { path: path, data: data };
        onEnter();
        history.push(currentState);
        if (navigator) {
            navigator.dispatch([navigationActions.navigate({ routeName: path })]);
        }
    }
    Router.go = go;
    function onEnter() {
        handlers
            .filter(hasMatchingRoute)
            .forEach(function (handler) { handler.onEnter(currentState.data); });
    }
    function onLeave() {
        handlers
            .filter(hasMatchingRoute)
            .forEach(function (handler) { handler.onLeave(); });
    }
    function hasMatchingRoute(handler) {
        return IDS.detokenizePlainText(currentState.data, handler.route.path) === currentState.path;
    }
    function setNavigator(reactNavigator, action) {
        navigator = reactNavigator;
        navigationActions = action;
    }
    Router.setNavigator = setNavigator;
})(Router || (Router = {}));
"use strict";
var MessageBus;
(function (MessageBus) {
    var callbackLists = {};
    function getCallbackList(name) {
        return callbackLists[name] || (callbackLists[name] = []);
    }
    function publish(name, message) {
        var callbackList = getCallbackList(name);
        for (var index = 0, length_1 = callbackList.length; index < length_1; index++) {
            var callback = callbackList[index];
            switch (callback.length) {
                case 0:
                    callback();
                    break;
                case 1:
                    callback(message);
                    break;
                default:
                    callback(name, message);
                    break;
            }
        }
    }
    MessageBus.publish = publish;
    function subscribe(name, callback) {
        getCallbackList(name).push(callback);
    }
    MessageBus.subscribe = subscribe;
})(MessageBus || (MessageBus = {}));
function IDS_Namespace(name)
{
	this.name = name;
}
IDS_Namespace.prototype.defineNamespace = function IDS_Namespace_defineNamespace(name)
{
	if (!this[name])
		this[name] = new IDS_Namespace(this.name + '.' + name);
};
IDS_Namespace.prototype.defineClass = function IDS_Namespace_defineClass(className, baseClass, members)
{
	// Register the constructor with the namespace:
	var constructor = this[className] = members.constructor;
	delete members.constructor;

	// Set up the inheritance relationship:
	var prototype;
	if (baseClass)
	{
		var f = function () { };
		f.prototype = constructor._baseClass = baseClass.prototype;
		prototype = constructor.prototype = new f();
		prototype.constructor = constructor;
	}
	else
		prototype = constructor.prototype;

	// Initialize the prototype:
	prototype._className = this.name + '.' + className;
	for (var i in members)
		prototype[i] = members[i];
};

IDS = new IDS_Namespace('IDS');
IDS.createDelegate = function IDS_createDelegate(target, func)
{
	return function IDS_Delegate() { func.apply(target, arguments); };
};
IDS.detokenizeHtml = function IDS_detokenizeHtml(container, format) // IDS.ComponentModel.ComponentHelper.DetokenizeHtml
{
	return IDS.detokenize(container, format, { htmlEncode: true });
};
IDS.detokenizePlainText = function IDS_detokenizePlainText(container, format) // IDS.ComponentModel.ComponentHelper.DetokenizePlainText
{
	return IDS.detokenize(container, format, { htmlEncode: false });
};
IDS.detokenize = function IDS_detokenize(container, format, options) // IDS.ComponentModel.ComponentHelper.Detokenize
{
	function indexOfUnescapedChar(ch, startIndex)
	{
		for (; ; )
		{
			startIndex = format.indexOf(ch, startIndex);
			if (startIndex <= 0 || format.charAt(startIndex - 1) !== '\\')
				return startIndex;
			startIndex++;
		}
	}

	var fragments = [];
	var literalStartIndex = 0; // index of last '}' plus 1
	for (; ; )
	{
		// Look for the next '{' not preceded by '\':
		var tokenStartIndex = indexOfUnescapedChar('{', literalStartIndex);
		if (tokenStartIndex < 0)
			break;

		fragments.push(format.substring(literalStartIndex, tokenStartIndex));

		// Look for the matching '}' not preceded by '\':
		var depth = 1;
		var tokenEndIndex = tokenStartIndex;
		while (depth > 0)
		{
			var closeBraceIndex = indexOfUnescapedChar('}', tokenEndIndex + 1);
			if (closeBraceIndex < 0)
				throw "Matching '}' not found.";
			var openBraceIndex = indexOfUnescapedChar('{', tokenEndIndex + 1);
			if (openBraceIndex < 0 || closeBraceIndex < openBraceIndex)
			{
				tokenEndIndex = closeBraceIndex;
				depth--;
			}
			else
			{
				tokenEndIndex = openBraceIndex;
				depth++;
			}
		}

		// Extract the token expression and format string:
		tokenStartIndex++;
		var tokenExpression;
		var tokenFormat;
		var colonIndex = format.indexOf(':', tokenStartIndex);
		if (colonIndex >= 0 && colonIndex < tokenEndIndex)
		{
			tokenExpression = format.substring(tokenStartIndex, colonIndex);
			tokenFormat = format.substring(colonIndex + 1, tokenEndIndex);
		}
		else
		{
			tokenExpression = format.substring(tokenStartIndex, tokenEndIndex);
			tokenFormat = '';
		}

		// Evaluate and format the token:
		var modifier = tokenExpression.match(/^(\?\?|\?|!!|!)?/)[1] || '';
		var tokenValue = IDS.eval(container, tokenExpression.substr(modifier.length));
		var formattedValue;
		switch (modifier)
		{
			case '?':
				formattedValue = tokenValue ? IDS.detokenize(container, tokenFormat, options) : '';
				break;
			case '??':
				formattedValue = (tokenValue !== undefined && tokenValue !== null)
					? IDS.detokenize(container, tokenFormat, options)
					: '';
				break;
			case '!':
				formattedValue = !tokenValue ? IDS.detokenize(container, tokenFormat, options) : '';
				break;
			case '!!':
				formattedValue = (tokenValue === undefined || tokenValue === null)
					? IDS.detokenize(container, tokenFormat, options)
					: '';
				break;
			default:
				formattedValue = IDS.formatValue(tokenValue, tokenFormat);
				if (options.htmlEncode)
					formattedValue = IDS.htmlEncode(formattedValue);
				break;
		}
		fragments.push(formattedValue);
		literalStartIndex = tokenEndIndex + 1;
	}
	fragments.push(format.substr(literalStartIndex));
	return fragments.join('').replace(/\\([\\{}])/g, '$1');
};
IDS.eval = function IDS_eval(container, expression, format) // IDS.ComponentModel.ComponentHelper.GetPropertyValue
{
	if (expression === '.')
		return container;
	if (container !== undefined && container !== null)
	{
		var parts = expression.split('.');
		for (var index = 0, length = parts.length; index < length; ++index)
		{
			var part = parts[index];
			var match = part.match(/(.+)\(\)(.*)/);
			if (match) {
				container = container[match[1]]();
				if (match[2].length > 0) {
					match = match[2].match(/\[(.+)\]/);
					if (match) {
						container = container[match[1]];
					} else {
						throw new Exception("Index expected");
					}
				}
			} else {
				match = part.match(/(.+)\[(.+)\]/);
				container = match ? container[match[1]][match[2]] : container[part];
			}
			if (container === undefined || container === null)
				break;
		}
	}
	return format ? IDS.format(format, container) : container;
};
IDS.filterArray = function IDS_filterArray(array, predicate)
{
	var result = [];
	for (var i = 0; i < array.length; ++i)
		if (predicate(array[i]))
			result.push(array[i]);
	return result;
};
IDS.forEach = function IDS_forEach(array, action)
{
	for (var i = 0; i < array.length; ++i)
		action(array[i]);
};
IDS.format = function IDS_format(format/*, args...*/) // System.String.Format
{
	var args = arguments;
	return format.replace(/\{(\d+)(?::([^\}]*))?\}/g,
		function (match, index, format)
		{
			var value = args[1 + parseInt(index)];
			return format ? IDS.formatValue(value, format) : value.toString();
		});
};
IDS.formatNumber = function IDS_formatNumber(s, decimalDigits, minValue, maxValue, fixedPoint, groupDigits, allowZero, currencySymbol)
{
	var n = typeof s === 'string' ? parseFloat(s.replace(/[\$,]/g, '').replace(/\.{2,}/g, '.')) : s;
	if (isNaN(n))
		return '';
	s = Math.max(Math.min(n, maxValue), minValue).toFixed(decimalDigits);
	if (!allowZero && /^0(?:\.0*)?$/.test(s))
		return '';
	var m = s.match(/^(-?)(\d{1,3})((?:\d{3})*)(\.\d*)?$/);
	if (groupDigits)
		m[3] = m[3].replace(/(\d{3})/g, ',$1');
	if (decimalDigits > 0 && !fixedPoint)
		m[4] = m[4].match(/^(?:(\..*[^0])0*|\.0*)$/)[1];
	s = m[2] + m[3] + (m[4] || '');
	if (currencySymbol)
	{
		if (m[1]) // negative
		{
			switch (IDS.currencyNegativePattern)
			{
				case 14: // "($ 1.23)"
					currencySymbol += ' ';
				case 0: // "($1.23)"
					s = '(' + currencySymbol + s + ')';
					break;
				case 12: // "$ -1.23"
					currencySymbol += ' ';
				case 2: // "$-1.23"
					s = currencySymbol + m[1] + s;
					break;
				case 9: // "-$ 1.23"
					currencySymbol += ' ';
				default: // "-$1.23" (case 1)
					s = m[1] + currencySymbol + s;
					break;
			}
		}
		else
		{
			switch (IDS.currencyPositivePattern)
			{
				case 2: // "$ 1.23"
					currencySymbol += ' ';
				default: // "$1.23" (case 0)
					s = currencySymbol + s;
			}
		}
	}
	else
	{
		s = m[1] + s;
	}
	return s;
};
IDS.formatValue = function IDS_formatValue(value, format) // Object.ToString
{
	if (value === undefined || value === null)
		return '';

	if (!format)
		return value.toString();

	var match;
	if (typeof value === 'string')
	{
		return value;
	}
	else if (typeof value === 'number')
	{
		match = format.match(/^([cn])([0-9]*)$/i);
		if (match)
			return IDS.formatNumber(value, match[2] || 2, -Infinity, Infinity, true, true, true, match[1].toLowerCase() === 'c' ? '$' : '');
	}
	else if (value instanceof Date)
	{
		var pad = function (value) { return IDS.padLeft(value, 2, '0'); }
		if (format === 'd')
			return pad(value.getUTCMonth() + 1) + '/' + pad(value.getUTCDate()) + '/' + value.getUTCFullYear();
		else if (format === 'g' || format === 'G')
		{
			return pad(value.getMonth() + 1) + '/' + pad(value.getDate()) + '/' + value.getFullYear() +
				' ' + pad((value.getHours() + 11) % 12 + 1) + // 0->12, 1->1, ..., 11->11, 12->12, 13->1, ..., 23->11
				':' + pad(value.getMinutes()) + (format === 'G' ? ':' + pad(value.getSeconds()) : '') +
				' ' + (value.getHours() < 12 ? IDS.amDesignator : IDS.pmDesignator);
		}
	}

	throw 'Invalid format specifier: ' + format;
};
IDS.htmlEncode = function IDS_htmlEncode(s)
{
	return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};
IDS.padLeft = function IDS_padLeft(s, width, ch)
{
	s = s.toString();
	return Array(width - s.length + 1).join(ch) + s;
};
IDS.parseIsoDateString = function IDS_parseIsoDateString(s)
{
	/// <summary>Parses a UTC date string in the ISO 8601 format "yyyy-MM-ddTHH:mm:ss.fffZ".</summary>
	var match = s.match(/^(\d{4})-(\d\d)-(\d\d)(?:T(\d\d):(\d\d):(\d\d)(\.\d+)?)?Z$/);
	return new Date(Date.UTC(
		match[1],
		match[2] - 1,
		match[3],
		match[4] || 0,
		match[5] || 0,
		match[6] || 0,
		match[7] ? (match[7] + '00').substr(1, 3) : 0));
};

function DataGridKnockoutViewModel(dataSource, defaultSortExpression, defaultSortDirection, pageSize)
{
	// ReSharper disable MisuseOfOwnerFunctionThis
	this.dataSource = dataSource;
	this.sortExpression = ko.observable(defaultSortExpression);
	this.sortDirection = ko.observable(defaultSortDirection);
	this.enablePaging = pageSize > 0; // enable paging if page size > 0.
	this.pageSize = pageSize;
	this.currentPageIndex = ko.observable(0);

	if (ko.isObservable(this.dataSource)) {
		this.dataSource.subscribe(
			function () {
				this.currentPageIndex(0);
			},
			this);
	}

	this.count = ko.computed(
		function ()
		{
			return ko.utils.unwrapObservable(this.dataSource).length;
		},
		this);

	this.items = ko.computed(
		function ()
		{
			var items = ko.utils.unwrapObservable(this.dataSource).slice(0); // slice(0) makes a copy of the array
			var sortExpression = this.sortExpression();
			if (sortExpression)
			{
				var sortColumns = sortExpression.replace(/ /g, '').split(',');
				items.sort(
					function (item1, item2)
					{
						for (var index = 0, length = sortColumns.length; index < length; ++index)
						{
							var value1 = ko.utils.unwrapObservable(IDS.eval(item1, sortColumns[index]));
							var value2 = ko.utils.unwrapObservable(IDS.eval(item2, sortColumns[index]));
							if (value1 < value2)
								return -1;
							if (value1 > value2)
								return 1;
						}
						return 0;
					});
				if (this.sortDirection() < 0)
					items.reverse();
			}
			return items;
		},
		this).extend({ throttle: 1 });

	this.sort = function (model, event)
	{
		var link = event.target || event.srcElement;
		var sortExpression = link.parentNode.getAttribute('data-sort');
		if (sortExpression === this.sortExpression())
			this.sortDirection(-this.sortDirection());
		else
		{
			this.sortExpression(sortExpression);
			this.sortDirection(1);
		}
		this.currentPageIndex(0);
	};

	this.isSortedBy = function (link, direction)
	{
		return this.sortExpression() === link.parentNode.getAttribute('data-sort') &&
			this.sortDirection() === direction;
	};

	this.columnTotal = function (format)
	{
		var items = ko.utils.unwrapObservable(this.dataSource);
		var total = 0;
		for (var index = 0, length = items.length; index < length; index++)
		{
			var value = parseFloat(IDS.detokenizeHtml(items[index], format));
			if (!isNaN(value))
				total += value;
		}
		return total;
	};

	this.itemsOnCurrentPage = ko.computed(
		function () {
			var startIndex = this.pageSize * this.currentPageIndex();
			return this.items().slice(startIndex, startIndex + this.pageSize);
		},
		this);

	this.maxPageIndex = ko.computed(
		function () {
			return Math.ceil(this.items().length / this.pageSize) - 1;
		},
		this);

	this.startingPageIndex = ko.computed(
		function () {
			return Math.max(Math.min(this.currentPageIndex() - 4, this.maxPageIndex() - 9), 0);
		},
		this);

	this.endingPageIndex = ko.computed(
		function () {
			return Math.min(this.startingPageIndex() + 10, this.maxPageIndex() + 1);
		},
		this);
	// ReSharper restore MisuseOfOwnerFunctionThis
}
