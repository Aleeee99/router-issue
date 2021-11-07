import { OptionsRouter} from "react-typesafe-routes";
import EditorPage from "./pages/EditorPage";
import Login from "./pages/Login";

const defaultOptions = {
    appBar: true,
  };  

  export const router = OptionsRouter(defaultOptions, route => ({
    home: route('/', {
      component: Login,
    }),
    editor: route('/EditorPage', {
      component: EditorPage,
      options: { appBar: false },
    }),
  }));
  