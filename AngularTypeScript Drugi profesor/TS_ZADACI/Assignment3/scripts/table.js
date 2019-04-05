"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyTable = (function () {
    function MyTable() {
        this._table = { body: [] };
    }
    Object.defineProperty(MyTable.prototype, "table", {
        get: function () { return this._table; },
        enumerable: true,
        configurable: true
    });
    ;
    MyTable.prototype.add = function (to, content) {
        switch (to) {
            case 'head':
                if (this._table.head !== undefined) {
                    this._table.head.push(content);
                }
                else {
                    this._table.head = [];
                    this._table.head.push(content);
                }
                break;
            case 'body':
                this._table.body.push(content);
                break;
            case 'foot':
                if (this._table.foot) {
                    this._table.foot.push(content);
                }
                else {
                    this._table.foot = [content];
                }
                break;
            default:
                console.error('You must choose between: "head", "body" or "foot"');
        }
    };
    MyTable.prototype.remove = function (from, what) {
        switch (from) {
            case 'head':
                if (this._table.head) {
                    this._table.head.splice(what, 1);
                }
                else {
                    console.log('Nothing to remove.');
                }
                break;
            case 'body':
                this._table.body.splice(what, 1);
                break;
            case 'foot':
                if (this._table.foot) {
                    this._table.foot.splice(what, 1);
                }
                else {
                    console.log('Nothing to remove.');
                }
                break;
            default:
                console.error('You must choose between: "head", "body" or "foot"');
        }
    };
    MyTable.prototype.formatHead = function () {
        var checkU = this._table.head;
        var prep = '';
        if (checkU !== undefined) {
            for (var i in checkU) {
                prep += '<th>';
                prep += checkU[i];
                prep += '</th>';
            }
        }
        return "<thead>" + prep + "</thead>";
    };
    MyTable.prototype.formatBody = function () {
        var checkU = this._table.body;
        var prep = '';
        if (checkU !== undefined) {
            for (var i in checkU) {
                var checkC = checkU[i].content;
                if (checkU[i].title !== undefined) {
                    prep += '<tr title="' + checkU[i].title + '">';
                }
                else {
                    prep += '<tr>';
                }
                if (checkC !== undefined) {
                    for (var i_1 in checkC) {
                        if (i_1 === 'category') {
                            prep += '<td>';
                            switch (Number(checkC[i_1])) {
                                case 1:
                                    prep += 'MOBILES';
                                    break;
                                case 2:
                                    prep += 'BAKERY';
                                    break;
                                case 3:
                                    prep += 'FRUITS';
                                    break;
                                default:
                                    prep += '';
                            }
                            prep += '</td>';
                        }
                        else if (i_1 !== 'ratings') {
                            prep += '<td>';
                            prep += checkC[i_1];
                            prep += '</td>';
                        }
                    }
                }
                prep += '</tr>';
            }
        }
        return "<tbody>" + prep + "</tbody>";
    };
    MyTable.prototype.formatFoot = function () {
        return "";
    };
    MyTable.prototype.formatTable = function () {
        return "<table>" + this.formatHead() + this.formatBody() + this.formatFoot() + "</table>";
    };
    return MyTable;
}());
exports.MyTable = MyTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcHAvdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFvQkE7SUFBQTtRQUNZLFdBQU0sR0FBWSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztJQThHM0MsQ0FBQztJQTdHRyxzQkFBSSwwQkFBSzthQUFULGNBQXVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBQzVDLHFCQUFHLEdBQUgsVUFBSSxFQUFVLEVBQUUsT0FBd0I7UUFDcEMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNULEtBQUssTUFBTTtnQkFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVMsT0FBTyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVMsT0FBTyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBYyxPQUFPLENBQUMsQ0FBQztnQkFDNUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFjLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUFD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