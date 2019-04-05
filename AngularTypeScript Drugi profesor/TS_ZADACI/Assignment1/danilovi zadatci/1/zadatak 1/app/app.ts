function func(s: string, n: number, b: boolean) {
    if (b) {
        console.log(s + n);
    } else {
        console.log('Boolean vrednost je false');
    }
}
func('ey bro', 404, false);