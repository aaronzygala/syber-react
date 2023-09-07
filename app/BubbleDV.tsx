import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Bubble from './Bubble'; // Import the Bubble class if it's in a separate file

class BubbleDV extends PureComponent {
  p: Paint;
  bList: Bubble[];
  height: number;
  width: number;
  addBubble: boolean;

  constructor(props: any) {
    super(props);
    this.p = new Paint(Paint.ANTI_ALIAS_FLAG);
    this.bList = [];
    this.height = 0;
    this.width = 0;
    this.addBubble = false;
  }

  componentDidMount() {
    this.updateDimensions();
  }

  updateDimensions = () => {
    const { height, width } = this.props;
    this.height = height;
    this.width = width;
    this.addBubble = true;
    this.forceUpdate();
  };

  canAddBubble = (x: number, y: number, radius: number): boolean => {
    if (!this.bList.length) {
      return true;
    }
    for (const bubble of this.bList) {
      if (
        !(
          bubble.x + bubble.getRadius() * 4.1 < x ||
          x + radius * 4.1 < bubble.x ||
          bubble.y + bubble.getRadius() * 4.1 < y ||
          y + radius * 4.1 < bubble.y
        )
      ) {
        return false;
      }
    }
    return true;
  };

  render() {
    const { addBubble, width, height } = this;
    const { radius } = this.props;

    return (
      <View>
        {addBubble &&
          this.bList.map((bubble, index) => (
            <Circle
              key={index}
              x={bubble.x}
              y={bubble.y}
              radius={bubble.getRadius()}
              p={this.p}
            />
          ))}
      </View>
    );
  }
}

interface CircleProps {
  x: number;
  y: number;
  radius: number;
  p: Paint;
}

class Circle extends PureComponent<CircleProps> {
  componentDidMount() {
    const { radius, x, y } = this.props;
    const bubble = new Bubble(x, y, radius);

    if (this.canAddBubble(x, y, radius)) {
      bubble.setColor('#19254b');
      bubble.setRadius(radius);
      this.bList.push(bubble);
    }

    // This is a simplified version of the loop that moves bubbles upwards
    for (const bubble of this.bList) {
      bubble.setY(bubble.getY() - 1);
    }
  }

  canAddBubble = (x: number, y: number, radius: number): boolean => {
    const { bList } = this;
    if (!bList.length) {
      return true;
    }
    for (const bubble of bList) {
      if (
        !(
          bubble.getX() + bubble.getRadius() * 4.1 < x ||
          x + radius * 4.1 < bubble.getX() ||
          bubble.getY() + bubble.getRadius() * 4.1 < y ||
          y + radius * 4.1 < bubble.getY()
        )
      ) {
        return false;
      }
    }
    return true;
  };

  render() {
    const { x, y, radius, p } = this.props;
    return (
      <View>
        {/* Render circle here using your preferred library */}
      </View>
    );
  }
}

export default BubbleDV;
