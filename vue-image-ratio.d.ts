import { DefineComponent, Plugin } from 'vue';

declare const VueImageRatio: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default VueImageRatio;
