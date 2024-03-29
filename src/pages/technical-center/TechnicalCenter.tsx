import { Helmet } from 'react-helmet-async';
import { red } from '../../assets';
import { CompanyTitle } from '../../components/company-title';
import s from './TechnicalCenter.module.scss';

const techCenter = [
  {
    name: 'Кузовной ремонт',
    title:
      'Современное оборудование позволяет осуществлять кузовной ремонт любой сложности. Работаем только с качественными материалами от проверенных поставщиков.',
  },
  {
    name: 'Слесарный ремонт',
    title:
      'Выполняем как текущий, так и капитальный слесарный ремонт, в том числе обслуживание силовой установки.',
  },
  {
    name: 'Шиномонтаж',
    title:
      'Своевременная замена резины необходима для безаварийной езды. Ориентируемся на пробег, состояние резины и время года.',
  },
  {
    name: ' Диагностика',
    title:
      'Качественная диагностика позволяет выявить не только имеющиеся проблемы, но и предупредить возможные, поэтому процедура проводится в плановом порядке.',
  },
  {
    name: 'Замена масла',
    title:
      'Это необходимая процедура, значительно увеличивающая ресурс двигателя, а также позволяющая минимизировать негативные последствия использования некачественного топлива.',
  },
  {
    name: 'Техническое бслуживание',
    title: 'Это обеспечивают бесперебойную работу основных узлов и агрегатов ТС.',
  },
  {
    name: 'Сход-развал',
    title:
      'Процедура обеспечивает устойчивость автомобиля на дороге. Проводится планово или в связи с нарушениями управляемости.',
  },
  {
    name: 'Подбор запчастей',
    title:
      'Надёжность автомобиля напрямую зависит от качества запчастей. Услуга позволяет подобрать качественную деталь, подходящую к конкретному автомобилю.',
  },
  {
    name: 'Продление страховых полисов',
    title:
      'Мы подберём честную компанию, предлагающую страховку по адекватным ценам. Это позволит избежать попадания в мошеннические схемы.',
  },
];

export default function TechnicalCenter() {
  return (
    <section className={s.section}>
      <Helmet>
        <title>Technical Center</title>
        <meta name="description" content="Технический центер" />
      </Helmet>
      <CompanyTitle title="Техцентр" />
      <p className={s.subtitle}>
        Специалисты нашего автосервиса имеют огромный опыт в обслуживании автомобилей разных
        производителей, новых и с пробегом, поэтому в короткие сроки способны обнаружить и исправить
        любую поломку. Все работы проводятся в соответствии с рекомендациями производителей.
      </p>
      <div className={s.techCenter}>
        {techCenter.map((el, i) => {
          return (
            <div key={i} className={s.techCenter__item}>
              <div className="flex">
                <img src={red} alt="red" />
                <h2>{el.name}</h2>
              </div>
              <p>{el.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
