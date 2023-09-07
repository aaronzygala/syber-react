import { DeviceEventEmitter } from 'react-native';
import { ArduinoManager } from 'react-native-arduino'; // Import the appropriate library

class Ardutooth {
  private static instance: Ardutooth;
  private arduinoManager: ArduinoManager | null = null;

  private constructor() {
    // Initialize the ArduinoManager instance
    this.arduinoManager = new ArduinoManager();
    // Subscribe to connection events
    DeviceEventEmitter.addListener('onDeviceConnected', this.onDeviceConnected);
    DeviceEventEmitter.addListener('onDeviceDisconnected', this.onDeviceDisconnected);
  }

  public static getInstance(): Ardutooth {
    if (!Ardutooth.instance) {
      Ardutooth.instance = new Ardutooth();
    }
    return Ardutooth.instance;
  }

  private onDeviceConnected = () => {
    // Handle device connected event
  };

  private onDeviceDisconnected = () => {
    // Handle device disconnected event
  };

  public async setConnection() {
    if (this.arduinoManager) {
      await this.arduinoManager.connectToDevice(); // Initiate connection
    }
  }

  public async disconnect() {
    if (this.arduinoManager) {
      await this.arduinoManager.disconnect(); // Close the connection
    }
  }

  public async sendInt(value: number) {
    if (this.arduinoManager) {
      await this.arduinoManager.sendData(`${value}\n`); // Send data
    }
  }

  // Implement similar methods for sending other data types

  public async receiveLine(): Promise<string> {
    if (this.arduinoManager) {
      const data = await this.arduinoManager.readData();
      return data.trim();
    }
    return '';
  }
}
