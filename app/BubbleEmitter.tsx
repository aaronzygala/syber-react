import { Canvas, Handler } from 'react-native';
import BubbleDV from './BubbleDV'; // Import the BubbleDV component
import { ConstraintLayout } from '@react-native-community/compat'; // Import ConstraintLayout from your library of choice

class BubbleEmitter {
  static emitBubbles(dv: BubbleDV, handler: Handler, layout: ConstraintLayout) {
    const r = () => {
      dv.draw(new Canvas());

      if (dv.getParent() !== null) {
        const parent = dv.getParent();
        if (parent instanceof ViewGroup) {
          parent.removeView(dv);
        }
      }

      layout.addView(dv);
      handler.postDelayed(r, 0);
    };
    handler.postDelayed(r, 0);
  }
}

export default BubbleEmitter;
