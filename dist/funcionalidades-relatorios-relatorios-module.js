(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcionalidades-relatorios-relatorios-module"],{

/***/ "./node_modules/ng-treetable/ng-treetable.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng-treetable/ng-treetable.es5.js ***!
  \*******************************************************/
/*! exports provided: TreeTableModule, ɵq, ɵr, ɵf, ɵj, ɵn, ɵm, ɵl, ɵk, ɵc, ɵi, ɵb, ɵh, ɵd, ɵg, ɵo, ɵe, ɵp, ɵs, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableModule", function() { return TreeTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return Paginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return PaginatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Column; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ColumnBodyTemplateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return ColumnEditorTemplateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return ColumnFilterTemplateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return ColumnFooterTemplateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ColumnHeaderTemplateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return FooterColumnGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return HeaderColumnGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return PrimeTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return TemplateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TemplateWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return TreeSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return UITreeRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TreeTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Header = /** @class */ (function () {
    function Header() {
    }
    Header.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-header',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    Header.ctorParameters = function () { return []; };
    return Header;
}());
var Footer = /** @class */ (function () {
    function Footer() {
    }
    Footer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-footer',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    Footer.ctorParameters = function () { return []; };
    return Footer;
}());
var PrimeTemplate = /** @class */ (function () {
    function PrimeTemplate(template) {
        this.template = template;
    }
    /**
     * @return {?}
     */
    PrimeTemplate.prototype.getType = /**
     * @return {?}
     */
    function () {
        if (this.type) {
            console.log('Defining a pTemplate with type property is deprecated use pTemplate="type" instead.');
            return this.type;
        }
        else {
            return this.name;
        }
    };
    PrimeTemplate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[pTemplate]',
                    host: {}
                },] },
    ];
    /** @nocollapse */
    PrimeTemplate.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    PrimeTemplate.propDecorators = {
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pTemplate',] },],
    };
    return PrimeTemplate;
}());
var TemplateWrapper = /** @class */ (function () {
    function TemplateWrapper(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    TemplateWrapper.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item,
            'index': this.index
        });
    };
    /**
     * @return {?}
     */
    TemplateWrapper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    TemplateWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[pTemplateWrapper]'
                },] },
    ];
    /** @nocollapse */
    TemplateWrapper.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    TemplateWrapper.propDecorators = {
        "item": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "templateRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pTemplateWrapper',] },],
    };
    return TemplateWrapper;
}());
var Column = /** @class */ (function () {
    function Column() {
        this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    Column.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'filter':
                    _this.filterTemplate = item.template;
                    break;
                case 'editor':
                    _this.editorTemplate = item.template;
                    break;
                default:
                    _this.bodyTemplate = item.template;
                    break;
            }
        });
    };
    Column.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-column',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Column.ctorParameters = function () { return []; };
    Column.propDecorators = {
        "field": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "sortField": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "header": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "footer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "sortable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "filter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "filterMatchMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rowspan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "colspan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styleClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "expander": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectionMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "filterPlaceholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "frozen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "sortFunction": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [PrimeTemplate,] },],
        "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] },],
    };
    return Column;
}());
var Row = /** @class */ (function () {
    function Row() {
    }
    Row.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-row',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Row.ctorParameters = function () { return []; };
    Row.propDecorators = {
        "columns": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Column,] },],
    };
    return Row;
}());
var HeaderColumnGroup = /** @class */ (function () {
    function HeaderColumnGroup() {
    }
    HeaderColumnGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-headerColumnGroup',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    HeaderColumnGroup.ctorParameters = function () { return []; };
    HeaderColumnGroup.propDecorators = {
        "rows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Row,] },],
    };
    return HeaderColumnGroup;
}());
var FooterColumnGroup = /** @class */ (function () {
    function FooterColumnGroup() {
    }
    FooterColumnGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-footerColumnGroup',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    FooterColumnGroup.ctorParameters = function () { return []; };
    FooterColumnGroup.propDecorators = {
        "rows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Row,] },],
    };
    return FooterColumnGroup;
}());
var ColumnBodyTemplateLoader = /** @class */ (function () {
    function ColumnBodyTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnBodyTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    /**
     * @return {?}
     */
    ColumnBodyTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnBodyTemplateLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-columnBodyTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnBodyTemplateLoader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    ColumnBodyTemplateLoader.propDecorators = {
        "column": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rowData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rowIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ColumnBodyTemplateLoader;
}());
var ColumnHeaderTemplateLoader = /** @class */ (function () {
    function ColumnHeaderTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnHeaderTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    };
    /**
     * @return {?}
     */
    ColumnHeaderTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnHeaderTemplateLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-columnHeaderTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnHeaderTemplateLoader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    ColumnHeaderTemplateLoader.propDecorators = {
        "column": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ColumnHeaderTemplateLoader;
}());
var ColumnFooterTemplateLoader = /** @class */ (function () {
    function ColumnFooterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnFooterTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
            '\$implicit': this.column
        });
    };
    /**
     * @return {?}
     */
    ColumnFooterTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnFooterTemplateLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-columnFooterTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnFooterTemplateLoader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    ColumnFooterTemplateLoader.propDecorators = {
        "column": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ColumnFooterTemplateLoader;
}());
var ColumnFilterTemplateLoader = /** @class */ (function () {
    function ColumnFilterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnFilterTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.filterTemplate, {
            '\$implicit': this.column
        });
    };
    /**
     * @return {?}
     */
    ColumnFilterTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnFilterTemplateLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-columnFilterTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnFilterTemplateLoader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    ColumnFilterTemplateLoader.propDecorators = {
        "column": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ColumnFilterTemplateLoader;
}());
var ColumnEditorTemplateLoader = /** @class */ (function () {
    function ColumnEditorTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ColumnEditorTemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.editorTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData
        });
    };
    /**
     * @return {?}
     */
    ColumnEditorTemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.view.destroy();
    };
    ColumnEditorTemplateLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-columnEditorTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnEditorTemplateLoader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    ColumnEditorTemplateLoader.propDecorators = {
        "column": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rowData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return ColumnEditorTemplateLoader;
}());
var TemplateLoader = /** @class */ (function () {
    function TemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    TemplateLoader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.template) {
            this.view = this.viewContainer.createEmbeddedView(this.template, {
                '\$implicit': this.data
            });
        }
    };
    /**
     * @return {?}
     */
    TemplateLoader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.view)
            this.view.destroy();
    };
    TemplateLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-templateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TemplateLoader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    ]; };
    TemplateLoader.propDecorators = {
        "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return TemplateLoader;
}());
var TreeSharedModule = /** @class */ (function () {
    function TreeSharedModule() {
    }
    TreeSharedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader],
                    declarations: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader]
                },] },
    ];
    /** @nocollapse */
    TreeSharedModule.ctorParameters = function () { return []; };
    return TreeSharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UITreeRow = /** @class */ (function () {
    function UITreeRow(treeTable) {
        this.treeTable = treeTable;
        this.level = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
    }
    /**
     * @return {?}
     */
    UITreeRow.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.node.parent = this.parentNode;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    UITreeRow.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['node'] && this.node) {
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UITreeRow.prototype.toggle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.node.expanded)
            this.treeTable.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.treeTable.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    UITreeRow.prototype.isLeaf = /**
     * @return {?}
     */
    function () {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    };
    /**
     * @return {?}
     */
    UITreeRow.prototype.isSelected = /**
     * @return {?}
     */
    function () {
        return this.treeTable.isSelected(this.node);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UITreeRow.prototype.onRowClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.treeTable.onRowClick(event, this.node);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UITreeRow.prototype.onRowRightClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.treeTable.onRowRightClick(event, this.node);
    };
    /**
     * @return {?}
     */
    UITreeRow.prototype.onRowTouchEnd = /**
     * @return {?}
     */
    function () {
        this.treeTable.onRowTouchEnd();
    };
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    UITreeRow.prototype.resolveFieldData = /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var /** @type {?} */ fields = field.split('.');
                var /** @type {?} */ value = data;
                for (var /** @type {?} */ i = 0, /** @type {?} */ len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    UITreeRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[pTreeRow]',
                    template: "\n        <div *ngIf=\"treeTable.isFiltered(node)\" class=\"ui-treetable-row\" [class]=\"treeTable.getRowStyleClass(node)\"\n            [ngClass]=\"{'ui-state-highlight':isSelected() ,'ui-treetable-row-selectable':treeTable.selectionMode && node.selectable !== false}\">\n            <td *ngFor=\"let col of treeTable.columns; let i=index\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\" \n            [style.display]=\"col.hidden ? 'none' : 'table-cell'\"\n            (click)=\"onRowClick($event)\" (touchend)=\"onRowTouchEnd()\" (contextmenu)=\"onRowRightClick($event)\">\n                <a href=\"#\" *ngIf=\"i==0\" class=\"ui-treetable-toggler fa fa-fw ui-c\" [ngClass]=\"{'fa-caret-down':node.expanded,'fa-caret-right':!node.expanded}\"\n                    [ngStyle]=\"{'margin-left':level*16 + 'px','visibility': isLeaf() ? 'hidden' : 'visible'}\"\n                    (click)=\"toggle($event)\"\n                    [title]=\"node.expanded ? labelCollapse : labelExpand\">\n                </a>\n                <div class=\"ui-chkbox ui-treetable-checkbox\" *ngIf=\"treeTable.selectionMode == 'checkbox' && i==0\">\n                    <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\">\n                        <span class=\"ui-chkbox-icon ui-c fa\" \n                            [ngClass]=\"{'fa-check':isSelected(),'fa-minus':node.partialSelected}\"></span>\n                    </div>\n                </div>\n                <span *ngIf=\"!col.template\">{{resolveFieldData(node.data,col.field)}}</span>\n                <ay-columnBodyTemplateLoader [column]=\"col\" [rowData]=\"node\" *ngIf=\"col.template\"></ay-columnBodyTemplateLoader>\n            </td>\n        </div>\n        <div *ngIf=\"node.children && node.expanded\" class=\"ui-treetable-row\" style=\"display:table-row;white-space: nowrap\">\n            <td [attr.colspan]=\"treeTable.shownColumns().length\" class=\"ui-treetable-child-table-container\">\n                <table>\n                    <tbody pTreeRow *ngFor=\"let childNode of node.children\" [node]=\"childNode\" [level]=\"level+1\" [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\" [parentNode]=\"node\"></tbody>\n                </table>\n            </td>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    UITreeRow.ctorParameters = function () { return [
        { type: TreeTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TreeTable; }),] },] },
    ]; };
    UITreeRow.propDecorators = {
        "node": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "parentNode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "level": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelExpand": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return UITreeRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Paginator = /** @class */ (function () {
    function Paginator() {
        this.pageLinkSize = 5;
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._totalRecords = 0;
        this._first = 0;
        this._rows = 0;
    }
    Object.defineProperty(Paginator.prototype, "totalRecords", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalRecords;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._totalRecords = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "first", {
        get: /**
         * @return {?}
         */
        function () {
            return this._first;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._first = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "rows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rows;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rows = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Paginator.prototype.isFirstPage = /**
     * @return {?}
     */
    function () {
        return this.getPage() === 0;
    };
    /**
     * @return {?}
     */
    Paginator.prototype.isLastPage = /**
     * @return {?}
     */
    function () {
        return this.getPage() === this.getPageCount() - 1;
    };
    /**
     * @return {?}
     */
    Paginator.prototype.getPageCount = /**
     * @return {?}
     */
    function () {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    };
    /**
     * @return {?}
     */
    Paginator.prototype.calculatePageLinkBoundaries = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ numberOfPages = this.getPageCount(), /** @type {?} */
        visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        var /** @type {?} */ start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), /** @type {?} */
        end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var /** @type {?} */ delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    };
    /**
     * @return {?}
     */
    Paginator.prototype.updatePageLinks = /**
     * @return {?}
     */
    function () {
        this.pageLinks = [];
        var /** @type {?} */ boundaries = this.calculatePageLinkBoundaries(), /** @type {?} */
        start = boundaries[0], /** @type {?} */
        end = boundaries[1];
        for (var /** @type {?} */ i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    };
    /**
     * @param {?} p
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePage = /**
     * @param {?} p
     * @param {?} event
     * @return {?}
     */
    function (p, event) {
        var /** @type {?} */ pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this.first = this.rows * p;
            var /** @type {?} */ state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
        }
        if (event) {
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    Paginator.prototype.getPage = /**
     * @return {?}
     */
    function () {
        return Math.floor(this.first / this.rows);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePageToFirst = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changePage(0, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePageToPrev = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changePage(this.getPage() - 1, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePageToNext = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changePage(this.getPage() + 1, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.changePageToLast = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changePage(this.getPageCount() - 1, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Paginator.prototype.onRppChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
        this.changePageToFirst(event);
    };
    Paginator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-paginator',
                    template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-paginator ui-widget ui-widget-header ui-unselectable-text'\">\n            <a href=\"#\" class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToFirst($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"fa fa-step-backward\"></span>\n            </a>\n            <a href=\"#\" class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToPrev($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"fa fa-backward\"></span>\n            </a>\n            <span class=\"ui-paginator-pages\">\n                <a href=\"#\" *ngFor=\"let pageLink of pageLinks\" class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePage(pageLink - 1, $event)\" [ngClass]=\"{'ui-state-active': (pageLink-1 == getPage())}\">{{pageLink}}</a>\n            </span>\n            <a href=\"#\" class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToNext($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"fa fa-forward\"></span>\n            </a>\n            <a href=\"#\" class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToLast($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"fa fa-step-forward\"></span>\n            </a>\n            <select class=\"ui-paginator-rpp-options ui-widget ui-state-default\" *ngIf=\"rowsPerPageOptions\" (change)=\"onRppChange($event)\">\n                <option *ngFor=\"let opt of rowsPerPageOptions\" [value]=\"opt\" [selected]=\"rows == opt\">{{opt}}</option>\n            </select>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Paginator.ctorParameters = function () { return []; };
    Paginator.propDecorators = {
        "pageLinkSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onPageChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styleClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rowsPerPageOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "totalRecords": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "first": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Paginator;
}());
var PaginatorModule = /** @class */ (function () {
    function PaginatorModule() {
    }
    PaginatorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [Paginator],
                    declarations: [Paginator]
                },] },
    ];
    /** @nocollapse */
    PaginatorModule.ctorParameters = function () { return []; };
    return PaginatorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TreeTable = /** @class */ (function () {
    function TreeTable(renderer) {
        this.renderer = renderer;
        this.pageLinks = 5;
        this.first = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
        this.metaKeySelection = true;
        this.filterDelay = 300;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterConstraints = {
            startsWith: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var /** @type {?} */ filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
            },
            contains: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            },
            endsWith: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var /** @type {?} */ filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
            },
            equals: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase() == filter.toString().toLowerCase();
            },
            in: /**
             * @param {?} value
             * @param {?} filter
             * @return {?}
             */
            function (value, filter) {
                if (filter === undefined || filter === null || filter.length === 0) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                for (var /** @type {?} */ i = 0; i < filter.length; i++) {
                    if (filter[i] === value)
                        return true;
                }
                return false;
            }
        };
    }
    /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.onRowClick = /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    function (event, node) {
        var /** @type {?} */ eventTarget = (/** @type {?} */ (event.target));
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            var /** @type {?} */ metaSelection = this.rowTouched ? false : this.metaKeySelection;
            var /** @type {?} */ index = this.findIndexInSelection(node);
            var /** @type {?} */ selected = (index >= 0);
            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    this.propagateSelectionDown(node, false);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, false);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.propagateSelectionDown(node, true);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, true);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else {
                if (metaSelection) {
                    var /** @type {?} */ metaKey = (event.metaKey || event.ctrlKey);
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection.splice(index, 1);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeUnselect.emit({ originalEvent: event, node: node });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(node);
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection.push(node);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeSelect.emit({ originalEvent: event, node: node });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = node;
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    else {
                        if (selected) {
                            this.selection.splice(index, 1);
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = this.selection || [];
                            this.selection.push(node);
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    this.selectionChange.emit(this.selection);
                }
            }
        }
        this.rowTouched = false;
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.onRowTouchEnd = /**
     * @return {?}
     */
    function () {
        this.rowTouched = true;
    };
    /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.onRowRightClick = /**
     * @param {?} event
     * @param {?} node
     * @return {?}
     */
    function (event, node) {
        if (this.contextMenu) {
            var /** @type {?} */ index = this.findIndexInSelection(node);
            var /** @type {?} */ selected = (index >= 0);
            if (!selected) {
                if (this.isSingleSelectionMode()) {
                    this.selection = node;
                }
                else if (this.isMultipleSelectionMode()) {
                    this.selection = [];
                    this.selection.push(node);
                    this.selectionChange.emit(this.selection);
                }
                this.selectionChange.emit(this.selection);
            }
            this.contextMenu.show(event);
            this.onContextMenuSelect.emit({ originalEvent: event, node: node });
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.findIndexInSelection = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var /** @type {?} */ index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else {
                for (var /** @type {?} */ i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    };
    /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    TreeTable.prototype.propagateSelectionUp = /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    function (node, select) {
        if (node.children && node.children.length) {
            var /** @type {?} */ selectedCount = 0;
            var /** @type {?} */ childPartialSelected = false;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount == node.children.length) {
                this.selection = this.selection || [];
                this.selection.push(node);
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    var /** @type {?} */ index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this.selection.splice(index, 1);
                    }
                }
                if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        var /** @type {?} */ parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    };
    /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    TreeTable.prototype.propagateSelectionDown = /**
     * @param {?} node
     * @param {?} select
     * @return {?}
     */
    function (node, select) {
        var /** @type {?} */ index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = this.selection || [];
            this.selection.push(node);
        }
        else if (!select && index > -1) {
            this.selection.splice(index, 1);
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.propagateSelectionDown(child, select);
            }
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.isSelected = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.isSingleSelectionMode = /**
     * @return {?}
     */
    function () {
        return this.selectionMode && this.selectionMode == 'single';
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.isMultipleSelectionMode = /**
     * @return {?}
     */
    function () {
        return this.selectionMode && this.selectionMode == 'multiple';
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.isCheckboxSelectionMode = /**
     * @return {?}
     */
    function () {
        return this.selectionMode && this.selectionMode == 'checkbox';
    };
    /**
     * @param {?} rowData
     * @return {?}
     */
    TreeTable.prototype.getRowStyleClass = /**
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        var /** @type {?} */ styleClass = '';
        if (this.rowStyleClass) {
            var /** @type {?} */ rowClass = this.rowStyleClass.call(this, rowData);
            if (rowClass) {
                styleClass += ' ' + rowClass;
            }
        }
        return styleClass;
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.hasFooter = /**
     * @return {?}
     */
    function () {
        if (this.columns) {
            var /** @type {?} */ columnsArr = this.columns.toArray();
            for (var /** @type {?} */ i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.immutable)
            this.handleDataChange();
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.globalFilter && this.value) {
            this.globalFilterFunction = this.renderer.listen(this.globalFilter, 'keyup', function () {
                _this.filterTimeout = setTimeout(function () {
                    _this.filter();
                    _this.filterTimeout = null;
                }, _this.filterDelay);
            });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TreeTable.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['value'] && this.value && !this.immutable) {
            this.handleDataChange();
        }
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.shownColumns = /**
     * @return {?}
     */
    function () {
        return this.columns.filter(function (col) { return !col.hidden; });
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.handleDataChange = /**
     * @return {?}
     */
    function () {
        if (this.paginator) {
            this.updatePaginator();
        }
        this.updateDataToRender(this.filteredValue || this.value);
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.updatePaginator = /**
     * @return {?}
     */
    function () {
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
        if (this.totalRecords && this.first >= this.totalRecords) {
            var /** @type {?} */ numberOfPages = Math.ceil(this.totalRecords / this.rows);
            this.first = Math.max((numberOfPages - 1) * this.rows, 0);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TreeTable.prototype.paginate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.stopFilterPropagation = true;
        }
        else {
            this.updateDataToRender(this.filteredValue || this.value);
        }
    };
    /**
     * @param {?} datasource
     * @return {?}
     */
    TreeTable.prototype.updateDataToRender = /**
     * @param {?} datasource
     * @return {?}
     */
    function (datasource) {
        if ((this.paginator || this.virtualScroll) && datasource) {
            this.dataToRender = [];
            var /** @type {?} */ startIndex = this.lazy ? 0 : this.first;
            var /** @type {?} */ endIndex = this.virtualScroll ? this.first + this.rows * 2 : startIndex + this.rows;
            for (var /** @type {?} */ i = startIndex; i < endIndex; i++) {
                if (i >= datasource.length) {
                    break;
                }
                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
        this.loading = false;
    };
    /**
     * @param {?} object
     * @return {?}
     */
    TreeTable.prototype.filterFields = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        var _this = this;
        var /** @type {?} */ res = false;
        this.columns.toArray().map(function (col) {
            if (!res && object[col.field]) {
                res = object[col.field].toString().toLowerCase().includes(_this.globalFilter.value.toString().toLowerCase());
            }
        });
        return res;
    };
    /**
     * @param {?} children
     * @param {?} parent
     * @return {?}
     */
    TreeTable.prototype.filterChildren = /**
     * @param {?} children
     * @param {?} parent
     * @return {?}
     */
    function (children, parent) {
        var _this = this;
        var /** @type {?} */ res = false;
        if (children) {
            children.map(function (child) {
                var /** @type {?} */ _fields = _this.filterFields(child.data);
                var /** @type {?} */ _children = _this.filterChildren(child.children, child);
                res = _fields || _children || res;
            });
            parent.expanded = res;
        }
        return res;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeTable.prototype.isFiltered = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.globalFilter) {
            return this.filterFields(node.data) || this.filterChildren(node.children, node);
        }
        else {
            return true;
        }
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.filter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.first = 0;
        this.filteredValue = this.value.filter(function (val) {
            return _this.filterFields(val.data) || _this.filterChildren(val.children, val);
        });
        if (this.paginator) {
            this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
        }
        this.updateDataToRender(this.filteredValue || this.value);
    };
    /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    TreeTable.prototype.resolveFieldData = /**
     * @param {?} data
     * @param {?} field
     * @return {?}
     */
    function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var /** @type {?} */ fields = field.split('.');
                var /** @type {?} */ value = data;
                for (var /** @type {?} */ i = 0, /** @type {?} */ len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @return {?}
     */
    TreeTable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        //remove event listener
        if (this.globalFilterFunction) {
            this.globalFilterFunction();
        }
    };
    TreeTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ay-treeTable',
                    template: "\n        <div [ngClass]=\"'ui-treetable ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-treetable-header ui-widget-header\" *ngIf=\"header\">\n                <ng-content select=\"ay-header\"></ng-content>\n            </div>\n            <div class=\"ui-treetable-tablewrapper\">\n                <table class=\"ui-widget-content\" [class]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <thead>\n                    <tr class=\"ui-state-default\">\n                        <th #headerCell *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\"\n                            [ngClass]=\"'ui-state-default ui-unselectable-text'\"\n                            [style.display]=\"col.hidden ? 'none' : 'table-cell'\">\n                            <span class=\"ui-column-title\" *ngIf=\"!col.headerTemplate\">{{col.header}}</span>\n                            <span class=\"ui-column-title\" *ngIf=\"col.headerTemplate\">\n                                    <ay-columnHeaderTemplateLoader [column]=\"col\"></ay-columnHeaderTemplateLoader>\n                                </span>\n                        </th>\n                    </tr>\n                    </thead>\n                    <tfoot *ngIf=\"hasFooter()\">\n                    <tr>\n                        <td *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\"\n                            [ngClass]=\"{'ui-state-default':true}\">\n                            <span class=\"ui-column-footer\" *ngIf=\"!col.footerTemplate\">{{col.footer}}</span>\n                            <span class=\"ui-column-footer\" *ngIf=\"col.footerTemplate\">\n                                    <ay-columnFooterTemplateLoader [column]=\"col\"></ay-columnFooterTemplateLoader>\n                                </span>\n                        </td>\n                    </tr>\n                    </tfoot>\n                    <tbody pTreeRow *ngFor=\"let node of dataToRender;let odd = odd;let even=even\"\n                           [node]=\"node\" [level]=\"0\"\n                           [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\"\n                           class=\"ui-widget-content\"\n                           [ngClass]=\"{'ui-treetable-even':even,'ui-treetable-odd':odd}\"\n                    ></tbody>\n                </table>\n            </div>\n            <ay-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\"\n                          styleClass=\"ui-paginator-bottom\"\n                          (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\"\n                          *ngIf=\"paginator\"></ay-paginator>\n            <div class=\"ui-treetable-footer ui-widget-header\" *ngIf=\"footer\">\n                <ng-content select=\"ay-footer\"></ng-content>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    TreeTable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    TreeTable.propDecorators = {
        "paginator": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "totalRecords": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rowsPerPageOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "first": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lazy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "virtualScroll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectionMode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styleClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelExpand": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "metaKeySelection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "contextMenu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "globalFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "filterDelay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "immutable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rowStyleClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "tableStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "tableStyleClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onNodeSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onNodeUnselect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onNodeExpand": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onNodeCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onContextMenuSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onLazyLoad": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "header": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Header,] },],
        "footer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Footer,] },],
        "columns": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Column,] },],
    };
    return TreeTable;
}());
var TreeTableModule = /** @class */ (function () {
    function TreeTableModule() {
    }
    TreeTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], TreeSharedModule, PaginatorModule],
                    exports: [TreeTable, TreeSharedModule, PaginatorModule],
                    declarations: [TreeTable, UITreeRow]
                },] },
    ];
    /** @nocollapse */
    TreeTableModule.ctorParameters = function () { return []; };
    return TreeTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-treetable.es5.js.map


/***/ }),

/***/ "./src/app/core/components/sidebar/sidebar-container.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/sidebar/sidebar-container.service.ts ***!
  \**********************************************************************/
/*! exports provided: SidebarContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainerService", function() { return SidebarContainerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarContainerService = /** @class */ (function () {
    function SidebarContainerService() {
        this.sidebarOptionsPortalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this._isClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
    }
    Object.defineProperty(SidebarContainerService.prototype, "sidebarOptionsPortal$", {
        get: function () {
            return this.sidebarOptionsPortalSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SidebarContainerService.prototype.open = function (portal) {
        this._isClosed.next(false);
        this.sidebarOptionsPortalSubject.next(portal);
    };
    SidebarContainerService.prototype.close = function () {
        this._isClosed.next(true);
        this.sidebarOptionsPortalSubject.next(undefined);
    };
    Object.defineProperty(SidebarContainerService.prototype, "isClosed$", {
        get: function () {
            return this._isClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SidebarContainerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], SidebarContainerService);
    return SidebarContainerService;
}());



/***/ }),

/***/ "./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.html":
/*!*****************************************************************************!*\
  !*** ./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n\n<div class=\"ss-table ss-table-striped ss-table-sortable\">\n  <ay-treeTable [value]=\"teste.data\">\n      <ay-column field=\"name\" header=\"Name\" footer=\"Name\"></ay-column>\n      <ay-column field=\"gender\" header=\"Gender\" footer=\"Gender\"></ay-column>\n      <ay-column field=\"country.name\" header=\"country\" footer=\"country\"></ay-column>\n      <ay-column field=\"country.base.name\" header=\"base\" footer=\"base\"></ay-column>\n  </ay-treeTable> \n</div>\n<BR>\n<BR>\n<BR>\n<div  >\n  <ay-treeTable [value]=\"tree\" selectionMode=\"single\" labelExpand=\"Abrir\" labelCollapse=\"Fechar\" >\n      <ay-column field=\"nome\" header=\"Nome\" footer=\"Nome\"></ay-column>\n      <ay-column field=\"nomeTipo\" header=\"Tipo\" footer=\"Tipo\"></ay-column>\n      <ay-column field=\"tags\" header=\"Tags\" footer=\"Tags\"></ay-column>\n      <ay-column field=\"dataReferencia\" header=\"Data Refêrencia\" footer=\"Data Refêrencia\"></ay-column>\n      <ay-column field=\"valorPrevistoString\" header=\"Valor Previsto\" footer=\"Valor Previsto\"></ay-column>\n      <ay-column field=\"valorLancamentoString\" header=\"Valor Lancamento\" footer=\"Valor Lancamento\"></ay-column>\n  </ay-treeTable>  \n     \n</div>\n\n<ng-template #filtrosSidebar > \n    <div class=\"row sidebar-content\" >\n        <div class=\"col-sm-12 row-sub-header\">Filtros de pesquisa</div>\n        <div class=\"col-sm-12 row-header\"><HR></div> \n\n        <div class=\"ss-form-group col-sm-12 \">\n          <label>Nº Lançamento</label> \n          <div class=\"ss-addon\" >    \n            <input class=\"ss-form-control\" [(ngModel)]=\"codLancamento\" maxlength=\"9\" type=\"tel\" mascara=\"INTEIRO\" (keyup)=\"onKey($event)\">\n          </div>\n        </div>\n \n        <div class=\"ss-form-group col-sm-12 row-col\" >\n            <label>Grupo </label>\n            <ng-select [items]=\"listGrupos\" bindLabel=\"nome\"  placeholder=\"Selecione\" [(ngModel)]=\"grupo\"></ng-select> \n        </div> \n \n\n        <div class=\"ss-form-group col-sm-12 \">\n          <label>Período</label> \n          <div class=\"ss-addon\" >    \n              <input class=\"ss-form-control\" [(ngModel)]=\"periodo\" type=\"tel\" maxlength=\"23\" scInput bsDaterangepicker >\n          </div>\n        </div> \n \n        <div class=\"col-sm-12\">&nbsp;</div>\n\n        <div class=\"col-sm-12\"> \n          <botao icon=\"search\" label=\"Pesquisar\" tipo=\"success\" (click)=\"pesquisar()\"></botao>\n        </div>   \n\n        <div class=\"col-sm-12\"> \n          <botao icon=\"undo\" label=\"Limpar\" tipo=\"outline-default\" (click)=\"limpar()\"></botao>\n        </div>  \n        <div class=\"col-sm-12\">&nbsp;</div> \n    </div> \n</ng-template> \n"

/***/ }),

/***/ "./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.ts":
/*!***************************************************************************!*\
  !*** ./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.ts ***!
  \***************************************************************************/
/*! exports provided: RelatoriosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosPage", function() { return RelatoriosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alerta.service */ "./src/app/services/alerta.service.ts");
/* harmony import */ var src_app_services_relatorio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/relatorio.service */ "./src/app/services/relatorio.service.ts");
/* harmony import */ var src_app_core_components_sidebar_sidebar_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/components/sidebar/sidebar-container.service */ "./src/app/core/components/sidebar/sidebar-container.service.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var src_app_core_util_funcoes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/funcoes */ "./src/app/core/util/funcoes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/***********************************
*  Tela Contatos
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
var RelatoriosPage = /** @class */ (function () {
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    function RelatoriosPage(actionBarService, relatorioService, sidebarService, alertaService) {
        this.actionBarService = actionBarService;
        this.relatorioService = relatorioService;
        this.sidebarService = sidebarService;
        this.alertaService = alertaService;
        this.relatorio = {};
        this.teste = {
            "data": [
                {
                    "data": {
                        "name": "Andrew",
                        "gender": "Male",
                        "country": { "name": "America", "base": { "name": "BASE 1" } }
                    },
                    "children": [
                        {
                            "data": {
                                "name": "Andrewson",
                                "gender": "Male",
                                "country": { "name": "America", "base": { "name": "BASE 1" } }
                            },
                            "children": [
                                {
                                    "data": {
                                        "name": "Eric",
                                        "gender": "Male",
                                        "country": { "name": "America", "base": { "name": "BASE 1" } }
                                    }
                                }
                            ]
                        },
                        {
                            "data": {
                                "name": "MARUNO",
                                "gender": "Male",
                                "country": { "name": "America", "base": { "name": "BASE 1" } }
                            },
                            "children": [
                                {
                                    "data": {
                                        "name": "MIGUEL",
                                        "gender": "Male",
                                        "country": { "name": "America", "base": { "name": "BASE 1" } }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "data": {
                        "name": "MARUNO",
                        "gender": "Male",
                        "country": { "name": "America", "base": { "name": "BASE 1" } }
                    },
                    "children": [
                        {
                            "data": {
                                "name": "MIGUEL",
                                "gender": "Male",
                                "country": { "name": "America", "base": { "name": "BASE 1" } }
                            },
                            "children": [
                                {
                                    "data": {
                                        "name": "IZA",
                                        "gender": "Female",
                                        "country": { "name": "America", "base": { "name": "BASE 1" } }
                                    }
                                }
                            ]
                        },
                        {
                            "data": {
                                "name": "MARUNO",
                                "gender": "Male",
                                "country": { "name": "America", "base": { "name": "BASE 1" } }
                            },
                            "children": [
                                {
                                    "data": {
                                        "name": "MIGUEL",
                                        "gender": "Male",
                                        "country": { "name": "America", "base": { "name": "BASE 1" } }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        this.meses = [];
    }
    /***************************************************************************************************
     * inicia os componentes
     ***************************************************************************************************/
    RelatoriosPage.prototype.ngOnInit = function () {
        this.pesquisar();
        this.sidebarService.open(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortal"](this.filtrosSidebar, undefined, {}));
    };
    RelatoriosPage.prototype.onKey = function (event) {
        if (event.key === "Enter") {
            this.pesquisar();
        }
    };
    RelatoriosPage.prototype.resolve = function () {
        var data = {
            "name": "Andrewson",
            "country": { "name": "America", "base": { "name": "BASE 1" } }
        };
        this.resolveFieldData(data, 'name');
        this.resolveFieldData(data, 'country.name');
        this.resolveFieldData(data, 'country.base.name');
    };
    RelatoriosPage.prototype.resolveFieldData = function (data, field) {
        console.log('\n\n\nresolveFieldData', data, field);
        if (data && field) {
            if (field.indexOf('.') == -1) {
                console.log('resolveFieldData', "field.indexOf('.') == -1 ->", data[field]);
            }
            else {
                var fields = field.split('.');
                console.log('resolveFieldData', "field.split('.') -> ", field.split('.'));
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    console.log('resolveFieldData', "value[fields[i]] ->  value[" + fields[i] + "] -> ", value[fields[i]]);
                    value = value[fields[i]];
                }
                return value;
            }
        }
    };
    /***************************************************************************************************
     *  realiza a pesquisa
     ***************************************************************************************************/
    RelatoriosPage.prototype.pesquisar = function () {
        var _this = this;
        this.relatorioService.findRelatorio().subscribe(function (response) {
            _this.relatorio = response;
            _this.atualizar();
        });
    };
    RelatoriosPage.prototype.atualizar = function () {
        this.tree = new Array();
        for (var _i = 0, _a = this.relatorio.competencias; _i < _a.length; _i++) {
            var competencia = _a[_i];
            var mes = this.getNodeCompetencia(competencia);
            for (var _b = 0, _c = this.relatorio.grupos; _b < _c.length; _b++) {
                var grupoVO = _c[_b];
                var grupo = this.getNodeGrupo(grupoVO);
                for (var _d = 0, _e = grupoVO.listCategorias; _d < _e.length; _d++) {
                    var categoriaVO = _e[_d];
                    var categoria = this.getNodeCategoria(grupoVO, categoriaVO);
                    for (var _f = 0, _g = this.relatorio.lista; _f < _g.length; _f++) {
                        var lancamentoVO = _g[_f];
                        if (lancamentoVO.anoMes == competencia && lancamentoVO.codCategoria == categoriaVO.codigo) {
                            if (this.validar(lancamentoVO)) {
                                var lancamento = this.getNodeLancamento(lancamentoVO);
                                console.log('lancamento', lancamento);
                                this.somarNode(categoria, lancamento);
                                categoria.children[categoria.children.length] = lancamento;
                            }
                        }
                    }
                    if (categoria.children.length > 0) {
                        this.somarNode(grupo, categoria);
                        grupo.children[grupo.children.length] = categoria;
                    }
                }
                if (grupo.children.length > 0) {
                    this.somarNode(mes, grupo);
                    mes.children[mes.children.length] = grupo;
                }
            }
            if (mes.children.length > 0) {
                this.tree[this.tree.length] = mes;
            }
        }
        this.numberToMoney(this.tree);
        console.log(this.tree);
    };
    RelatoriosPage.prototype.numberToMoney = function (nodes) {
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            node.data.valorPrevistoString = src_app_core_util_funcoes__WEBPACK_IMPORTED_MODULE_6__["Funcoes"].numberToMoney(node.data.valorPrevisto);
            node.data.valorLancamentoString = src_app_core_util_funcoes__WEBPACK_IMPORTED_MODULE_6__["Funcoes"].numberToMoney(node.data.valorLancamento);
            if (node.children.length > 0) {
                this.numberToMoney(node.children);
            }
        }
    };
    RelatoriosPage.prototype.validar = function (lancamento) {
        var set = true;
        // for(let mes of this.meses) { 
        //   if(mes.nome == lancamento.competencia && !mes.check){
        //     set = false;
        //   } 
        // }
        // for(let tipo of this.relatorio.tipos) {   
        //   if(tipo.codigo == lancamento.codTipo && !tipo.check){ 
        //   if(tipo.codigo == lancamento.codTipo){ 
        //     set = false; 
        //   } 
        // }
        // if(lancamento.tags && ){
        // }
        // var countAll = 0, countUncheck = 0;
        // for(lancamento.tags, function(i, tl) {     
        //   for($scope.listTags, function(i, tag) {   
        //     if(tag.codigo == tl.codigo){   
        //       countAll++; 
        //       if(tag.check == 0){ 
        //         countUncheck++;  
        //       }
        //     } 
        //   } 
        // }
        // if(countUncheck > 0 && countUncheck == countAll){ 
        //   set = false; 
        // } 
        // if($scope.listTags[0].check == 0 && lancamento.listTags.length == 0){  
        //   set = false; 
        // }
        // for(let grupo of this.relatorio.grupos) {    
        //   for(let categoria of grupo.listCategorias) {  
        //     if(categoria.codigo == lancamento.codCategoria && !categoria.check){ 
        //     if(categoria.codigo == lancamento.codCategoria){ 
        //       set = false; 
        //     } 
        //   }
        // }     
        return true;
    };
    RelatoriosPage.prototype.somarNode = function (o1, o2) {
        o1.data.valorPrevisto = o1.data.valorPrevisto + o2.data.valorPrevisto;
        o1.data.valorLancamento = o1.data.valorLancamento + o2.data.valorLancamento;
    };
    RelatoriosPage.prototype.getNodeCompetencia = function (competencia) {
        var o = { nome: "Compet\u00EAncia - " + competencia, valorPrevisto: 0.0, valorLancamento: 0.0 };
        return { data: o, children: [] };
    };
    RelatoriosPage.prototype.getNodeGrupo = function (grupo) {
        var o = { nome: "Grupo - " + grupo.nome, codGrupo: grupo.codigo, nomeGrupo: grupo.nome, valorPrevisto: 0.0, valorLancamento: 0.0 };
        return { data: o, children: [] };
    };
    RelatoriosPage.prototype.getNodeCategoria = function (grupo, categoria) {
        var o = { nome: "Categoria - " + categoria.nome, codGrupo: grupo.codigo, nomeGrupo: grupo.nome, codCategoria: categoria.codigo, nomeCategoria: categoria.nome, valorPrevisto: 0.0, valorLancamento: 0.0 };
        return { data: o, children: [] };
    };
    RelatoriosPage.prototype.getNodeLancamento = function (o) {
        o.nome = "Lan\u00E7amento - " + o.codigo;
        o.nomeTipo = this.getNomeTipo(o.codTipo);
        return { data: o, children: [] };
    };
    RelatoriosPage.prototype.getNomeTipo = function (codigo) {
        for (var _i = 0, _a = this.relatorio.tipos; _i < _a.length; _i++) {
            var tipo = _a[_i];
            if (tipo.codigo == codigo) {
                return tipo.nome;
            }
        }
        return '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filtrosSidebar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], RelatoriosPage.prototype, "filtrosSidebar", void 0);
    RelatoriosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relatorios',
            template: __webpack_require__(/*! ./relatorios.html */ "./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.html"),
            styles: [__webpack_require__(/*! ./relatorios.scss */ "./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_1__["ActionBarService"],
            src_app_services_relatorio_service__WEBPACK_IMPORTED_MODULE_3__["RelatorioService"],
            src_app_core_components_sidebar_sidebar_container_service__WEBPACK_IMPORTED_MODULE_4__["SidebarContainerService"],
            src_app_services_alerta_service__WEBPACK_IMPORTED_MODULE_2__["AlertaService"]])
    ], RelatoriosPage);
    return RelatoriosPage;
}());



/***/ }),

/***/ "./src/app/funcionalidades/relatorios/relatorios-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/funcionalidades/relatorios/relatorios-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RelatoriosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosRoutingModule", function() { return RelatoriosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_relatorios_relatorios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/relatorios/relatorios */ "./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _pages_relatorios_relatorios__WEBPACK_IMPORTED_MODULE_2__["RelatoriosPage"]
    }];
var RelatoriosRoutingModule = /** @class */ (function () {
    function RelatoriosRoutingModule() {
    }
    RelatoriosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RelatoriosRoutingModule);
    return RelatoriosRoutingModule;
}());



/***/ }),

/***/ "./src/app/funcionalidades/relatorios/relatorios.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/funcionalidades/relatorios/relatorios.module.ts ***!
  \*****************************************************************/
/*! exports provided: RelatoriosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosModule", function() { return RelatoriosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ng_treetable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-treetable */ "./node_modules/ng-treetable/ng-treetable.es5.js");
/* harmony import */ var src_app_core_components_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/components/component.module */ "./src/app/core/components/component.module.ts");
/* harmony import */ var src_app_modals_modals_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/modals.module */ "./src/app/modals/modals.module.ts");
/* harmony import */ var src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/components/actionbar */ "./src/app/core/components/actionbar/index.ts");
/* harmony import */ var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./relatorios-routing.module */ "./src/app/funcionalidades/relatorios/relatorios-routing.module.ts");
/* harmony import */ var _pages_relatorios_relatorios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/relatorios/relatorios */ "./src/app/funcionalidades/relatorios/pages/relatorios/relatorios.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_6__["ptBrLocale"]);
var RelatoriosModule = /** @class */ (function () {
    function RelatoriosModule() {
    }
    RelatoriosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                ng_treetable__WEBPACK_IMPORTED_MODULE_8__["TreeTableModule"],
                src_app_core_components_actionbar__WEBPACK_IMPORTED_MODULE_11__["ActionbarModule"],
                src_app_core_components_component_module__WEBPACK_IMPORTED_MODULE_9__["ComponentModule"],
                src_app_modals_modals_module__WEBPACK_IMPORTED_MODULE_10__["ModalsModule"],
                _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_12__["RelatoriosRoutingModule"]
            ],
            declarations: [_pages_relatorios_relatorios__WEBPACK_IMPORTED_MODULE_13__["RelatoriosPage"]]
        })
    ], RelatoriosModule);
    return RelatoriosModule;
}());



/***/ }),

/***/ "./src/app/services/relatorio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/relatorio.service.ts ***!
  \***********************************************/
/*! exports provided: RelatorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioService", function() { return RelatorioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/***************************************************************************************************
*  Serviço para recuperar dados de relatórios
*  @Aplicativo Fiscalização WEB
*  @Autor willian.maruno
***************************************************************************************************/
var RelatorioService = /** @class */ (function () {
    /***************************************************************************************************
     *            Construtor de pobre
     ***************************************************************************************************/
    function RelatorioService(http) {
        this.http = http;
    }
    /***************************************************************************************************
     *
     ***************************************************************************************************/
    RelatorioService.prototype.findRelatorio = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rest_url + "/relatorios");
    };
    /***************************************************************************************************
     *
     ***************************************************************************************************/
    RelatorioService.prototype.findRelatorioAgrupado = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rest_url + "/relatorios/agrupados");
    };
    RelatorioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RelatorioService);
    return RelatorioService;
}());



/***/ })

}]);
//# sourceMappingURL=funcionalidades-relatorios-relatorios-module.js.map