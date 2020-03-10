import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the weater-app extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'weater-app',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension weater-app is activated!');
  }
};

export default extension;
