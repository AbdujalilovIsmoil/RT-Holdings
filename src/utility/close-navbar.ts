interface navbarInterface {
  mainClass: string;
  publicPath: string;
  staticPath: string;
  activeClass: string;
}

export const closeNavbar = (path: navbarInterface) => {
  let mainClass = path.mainClass;

  if (path.publicPath === path.staticPath) {
    mainClass += ` ${path.activeClass}`;
  }

  return mainClass;
};
