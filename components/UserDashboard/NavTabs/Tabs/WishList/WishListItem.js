/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

function WishListItem({ item }) {
    return (
        <tr>
            <td>
                <a href={'/product/' + item.slug}>
                    <img
                        src={item.images.src}
                        className="lazyload"
                        alt={item.name}
                    />
                </a>
            </td>
            <td>
                <p className="m-0">#{item._id}</p>
            </td>
            <td>
                <p className="fs-6 m-0">{item.name}</p>
            </td>
            <td>
                <p className="theme-color fs-6">
                    ${item.price}
                </p>
            </td>
            <td>
                <Link href={'/product/' + item.slug}>
                    <a className="btn btn-solid-default btn-sm fw-bold ms-2">
                        View
                    </a>
                </Link>
            </td>
        </tr>
    );
}

export default WishListItem;
