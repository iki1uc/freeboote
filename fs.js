// OPFS-Layer für FREEBOOTE - persistent, auch nach Reload
export class QueastFS {
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
    return await file.arrayBuffer();
  }
  async mountRAM() {
    this.ramFS = new Map(); // dein tmpfs wie bei Knoppix
  }
}
