// OPFS-Layer für QUEAST - persistent, auch nach Reload da
class QueastFS {
  async init() {
    this.root = await navigator.storage.getDirectory();
  }
  async write(path, data) {
    const fileHandle = await this.root.getFileHandle(path, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(data);
    await writable.close();
  }
  async read(path) {
    const fileHandle = await this.root.getFileHandle(path);
    const file = await fileHandle.getFile();
    return await file.arrayBuffer(); // perfekt für deine hdf.rom Module
  }
  async mountRAM() {
    // Dein tmpfs - simuliert Knoppix RAM-FS
    this.ramFS = new Map(); // später durch SharedArrayBuffer ersetzen
  }
}
