'use client';

import React from 'react';
import Link from 'next/link';
import { TelegramChannels } from '@/components/telegram/TelegramChannels';
import AboutContainer  from '@/components/aboutContainer';

const Delivery: React.FC = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto my-10 md:my-20">
        <p className="text-[#8D8D9A] text-[14px] mb-4">
          <Link href="/">Главная страница</Link> | Доставка и оплата
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side content */}
          <div className="w-full lg:w-8/12 text-[#545454]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              Доставка и оплата <br className="hidden sm:block" /> ЗАКАЗ С ДОСТАВКОЙ ИЗ ПОДНЕБЕСНОЙ
            </h1>

            <div className="flex flex-col gap-3 mt-6 md:mt-10">
              <h3 className="font-bold text-base sm:text-lg md:text-[18px] pt-3">ФИНАНСОВЫЕ ДЕТАЛИ:</h3>
              <div className="font-normal text-sm sm:text-base md:text-[18px] space-y-2">
                <p>Авансовый платеж 50% на карту Райфайзен/Газпромбанк</p>
                <p>Остаток после готовности к отправке (включая транспортировку)</p>
                <p>⚠️ БЕЗ КОММЕНТАРИЕВ К ПЛАТЕЖУ! ⚠️</p>
                <p>Для граждан других стран: ПОЛНАЯ ПРЕДОПЛАТА через Pay Pal/Western Union/swift</p>
              </div>

              <h3 className="font-bold text-base sm:text-lg md:text-[18px] pt-3">ПРОЦЕСС:</h3>
              <p className="font-normal text-sm sm:text-base md:text-[18px]">
                После получения предоплаты мы выкупаем товар, в течение 10 дней проводим приемку на нашем складе (проверка качества/размера), после чего передаем перевозчику. Получив транспортный счет, выставляем его вам с учетом доставки. После финального расчета — отправляем посылку.
              </p>

              <h3 className="font-bold text-base sm:text-lg md:text-[18px] pt-3">СРОКИ ПУТЕШЕСТВИЯ ВАШЕГО ЗАКАЗА:</h3>
              <p className="font-normal text-sm sm:text-base md:text-[18px]">
                Воздушным путем: 10-12 дней + время доставки от фабрики (до 10 дней)
              </p>

              <h3 className="font-bold text-base sm:text-lg md:text-[18px] pt-3">ВАЖНЫЕ НЮАНСЫ:</h3>
              <div className="font-normal text-sm sm:text-base md:text-[18px] space-y-2">
                <p>Все цены указаны БЕЗ учета логистики</p>
                <p>Стоимость доставки зависит от актуального курса, веса и габаритов</p>
                <p>На оплату счета у вас ровно 24 часа — без напоминаний от менеджера!</p>
                <p>При отсутствии оплаты на 2-й день — посылка возвращается в Китай</p>
                <p>Повторная отправка только после компенсации двойной доставки</p>
                <p>Замена размера возможна, возврат — нет</p>
                <p>При вашем отказе от заказа — удерживаем 10% (компенсация наших расходов)</p>
                <p>При нашем отказе (отсутствие товара/размера) — возвращаем 100%</p>
                <p>Индивидуальный пошив добавляет до 3,5 недель к сроку</p>
                <p>Предупреждаем: возможны задержки со стороны производителя!</p>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full lg:w-4/12 text-[#545454]">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-base sm:text-lg md:text-[18px] pt-3">ОТСЛЕЖИВАНИЕ:</h3>
              <div className="font-normal text-sm sm:text-base md:text-[18px] mb-6 space-y-2">
                <p>https://www.std-express.com</p>
                <p>ГОРЯЧАЯ ЛИНИЯ:</p>
                <p>00000000000</p>
                <p>📦 ЗАКАЗ ТОВАРОВ ИЗ РОССИЙСКОГО НАЛИЧИЯ 📦</p>
              </div>

              <div className="font-normal text-sm sm:text-base md:text-[18px] space-y-2">
                <p>Доставка СДЭК (оплата получателем при вручении)</p>
                <p>Наложенным платежом НЕ РАБОТАЕМ</p>
                <p>Отправка ТОЛЬКО ПОСЛЕ 100% ОПЛАТЫ</p>
                <p>Сроки доставки по России: 3-5 рабочих дней</p>
                <p>График отправок: пн, ср, пт до 13:00 МСК</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutContainer />
      <TelegramChannels />
    </div>
  );
};

export default Delivery;
