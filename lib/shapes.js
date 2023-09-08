class Shape{
    setColor(color){
        this.color = color
    }
}

class Square extends Shape{
    render(){
        return (`<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`)
    }
}
class Triamgle extends Shape{
    render(){
        return (`<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`)
    }
}
class Circle extends Shape{
    render(){
        return (`<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`)
    }
}
