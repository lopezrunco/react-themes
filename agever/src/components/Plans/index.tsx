import React from "react";

interface PriceCardI {
    icon: string;
    title: string;
    price: string;
    photos: boolean;
    transfer: boolean;
    styles: boolean;
    services: boolean;
    backup: boolean;
}

interface PriceCardProps {
    pricecard: PriceCardI;
}

const priceCards: PriceCardI[] = [
    {
        icon: 'fas fa-shopping-bag',
        title: 'Plan 1',
        price: '$100',
        photos: true,
        transfer: false,
        styles: false,
        services: false,
        backup: false
    },
    {
        icon: 'fab fa-gripfire',
        title: 'Plan 2',
        price: '$500',
        photos: true,
        transfer: true,
        styles: false,
        services: false,
        backup: false
    },
    {
        icon: 'far fa-gem',
        title: 'Super plan',
        price: '$900',
        photos: true,
        transfer: true,
        styles: true,
        services: true,
        backup: true
    }
];

export const Plans: React.FC = () => {
    return (
        <section id="plans">
            <article className="content-wrap">

                <div className="row title">
                    <div className="col-12">
                        <h2>We need money</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia necessitatibus
                            reiciendis, aliquam voluptas ut quo est dicta! Ex corporis quasi consequuntur iusto sunt
                            unde!
                        </p>
                    </div>
                </div>
                <div className="row">
                    {priceCards.map((el, i) => <PriceCard key={i} pricecard={el} />)}
                </div>
            </article>
        </section>
    )
}

const PriceCard: React.FC<PriceCardProps> = ({ pricecard }) => {
    const { icon, title, price, photos, transfer, styles, services, backup } = pricecard
    const returnIcon = (element: boolean) => {
        return element ? <i className="far fa-check-circle"></i> : <i className="far fa-times-circle"></i>
    }

    return (
        <div className="col-md-4">
            <div className="price-card">
                <i className={`icon ${icon}`}></i>
                <h4>{title}</h4>
                <span className="price">{price}</span>
                <ul>
                    <li><span>1 GB Photos</span>{returnIcon(photos)}</li>
                    <li><span>Secure Online Transfer</span>{returnIcon(transfer)}</li>
                    <li><span>Unlimited Styles</span>{returnIcon(styles)}</li>
                    <li><span>Customer Service</span>{returnIcon(services)}</li>
                    <li><span>Manual Backup</span>{returnIcon(backup)}</li>
                </ul>
                <a className="btn btn-primary" href="/contact"><i
                    className="far fa-arrow-alt-circle-right"></i> Choose plan</a>
            </div>
        </div>
    )
}