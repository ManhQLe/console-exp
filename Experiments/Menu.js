const Menu = ["Item 1", "Item 2", "Item 3"]

function cursor(o) {
    this.o = o|| process.stdout;
    this.str = ""
}

cursor.prototype.move = function (x, y) {
   this.str+=("\033[" + y + ";" + x + "f");
}
cursor.prototype.clear = function () {
    this.str += ("\033[2J")
}

cursor.prototype.write = function (s) {
    this.str += s;
}
cursor.prototype.flush = function () {
    this.o.write(this.str);
    this.str = "";
}


const c = new cursor();

c.clear();
Menu.forEach(function (s, i) {
    c.move(0, i + 1)
    c.write(s);
})

c.flush();