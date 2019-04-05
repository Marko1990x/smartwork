interface myTable {
    body: myTable_Row[];
    head?: string[];
    foot?: myTable_Row[];
}

interface myTable_Row {
    title?: string;
    content: myTable_Cell[];
}

interface myTable_Cell {
    category: number;
    id: number;
    name: string;
    originalPrice: number;
    ratings?: object[];
    stock: number;
}

export class MyTable {
    private _table: myTable = { body: [] };
    get table(): myTable { return this._table };
    add(to: string, content: object | string): void {
        switch (to) {
            case 'head':
                if (this._table.head !== undefined) {
                    this._table.head.push(<string>content);
                } else {
                    this._table.head = [];
                    this._table.head.push(<string>content);
                }
                break;
            case 'body':
                this._table.body.push(<myTable_Row>content);
                break;
            case 'foot':
                if (this._table.foot) {
                    this._table.foot.push(<myTable_Row>content);
                } else {
                    this._table.foot = [<myTable_Row>content];
                }
                break;
            default:
                console.error('You must choose between: "head", "body" or "foot"');
        }
    }
    remove(from: string, what: number): void {
        switch (from) {
            case 'head':
                if (this._table.head) {
                    this._table.head.splice(what, 1);
                } else {
                    console.log('Nothing to remove.');
                }
                break;
            case 'body':
                this._table.body.splice(what, 1);
                break;
            case 'foot':
                if (this._table.foot) {
                    this._table.foot.splice(what, 1);
                } else {
                    console.log('Nothing to remove.');
                }
                break;
            default:
                console.error('You must choose between: "head", "body" or "foot"');
        }
    }
    formatHead(): string {
        const checkU = this._table.head;
        let prep: string = '';
        if (checkU !== undefined) {
            for (let i in checkU) {
                prep += '<th>';
                prep += checkU[i];
                prep += '</th>';
            }
        }
        return `<thead>${prep}</thead>`;
    }
    formatBody(): string {
        const checkU: myTable_Row[] = this._table.body;
        let prep: string = '';
        if (checkU !== undefined) {
            for (let i in checkU) {
                const checkC = checkU[i].content;
                if (checkU[i].title !== undefined) {
                    prep += '<tr title="' + checkU[i].title + '">';
                } else {
                    prep += '<tr>';
                }
                if (checkC !== undefined) {
                    for (let i in checkC) {
                        if (i === 'category') {
                            prep += '<td>';
                            switch (Number(checkC[i])) {
                                case 1:

                                    prep += 'MOBILES';
                                    break;
                                case 2:
                                    prep += 'BAKERY';
                                    break;
                                case 3:
                                    prep += 'FRUITS';
                                    break
                                default:
                                    prep += '';
                            }
                            prep += '</td>';
                        } else if (i !== 'ratings') {
                            prep += '<td>';
                            prep += checkC[i];
                            prep += '</td>';
                        }

                    }
                }
                prep += '</tr>';
            }
        }
        return `<tbody>${prep}</tbody>`;
    }
    formatFoot(): string {
        return ``;
    }
    formatTable(): string {
        return `<table>${this.formatHead()}${this.formatBody()}${this.formatFoot()}</table>`;
    }
}