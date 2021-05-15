import Gauge from './components/Gauge.js';

export default class View {
    constructor() {
        this.model = null;

        this.clsGaugePing = new Gauge('gauge-ping', 0, 1000, 'Ping', 0, 'ms');
        this.clsGaugePing.render();

        this.clsGaugeSpeedUpload = new Gauge('gauge-speed-upload', 0, 300, 'Velocidad de Carga', 0, 'Mb/s');
        this.clsGaugeSpeedUpload.render();

        this.clsGaugeSpeedDownload = new Gauge('gauge-speed-download', 0, 300, 'Velocidad de Descarga', 0, 'Mb/s');
        this.clsGaugeSpeedDownload.render();
    }

    setModel(model) {
        this.model = model
    }
}