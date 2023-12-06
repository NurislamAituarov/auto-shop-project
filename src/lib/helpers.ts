const currentUrl = window.location;

export function createHref(title: string, navigate: any, scrollContextData: any) {
  if (currentUrl.hash.length > 2) {
    navigate('/', { replace: false });
    localStorage.setItem('active', 'Подбор авто');
    setTimeout(() => {
      scrollContextData?.scrollToSection(createHref(title, navigate, scrollContextData));
    }, 500);
  } else {
    if (scrollContextData) {
      const { refCarAvailable, refSpecialOffers, refApplication, refQuickSelection } =
        scrollContextData;
      switch (title) {
        case 'Каталог авто':
          return refQuickSelection;
        case 'Кредит и рассрочка':
          return refApplication;
        case 'Спецпредложения':
          return refSpecialOffers;
        case 'Авто с пробегом':
          return refCarAvailable;
        default:
          return '';
      }
    }
  }
}
