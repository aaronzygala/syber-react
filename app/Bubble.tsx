class Bubble {
    color: string;
    x: number;
    y: number;
    radius: number;
  
    constructor(x: number, y: number, radius: number) {
      this.color = "#19254b";
      this.radius = radius;
      this.x = x;
      this.y = y;
    }
  
    getColor(): string {
      return this.color;
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  
    getX(): number {
      return this.x;
    }
  
    setX(x: number): void {
      this.x = x;
    }
  
    getY(): number {
      return this.y;
    }
  
    setY(y: number): void {
      this.y = y;
    }
  
    getRadius(): number {
      return this.radius;
    }
  
    setRadius(radius: number): void {
      this.radius = radius;
    }
  }
  
  export default Bubble;
  