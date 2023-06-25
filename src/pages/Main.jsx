// import { Children } from 'react'
import { user } from '../data'

const Main = () => {
    return (
        <div>
            {/* View types */}
            <div className="sorting-wrapper">
                <div className="btn-wrapper">
                    <button className="buttons list-view"></button>
                    <button className="buttons card-view"></button>
                    <button className="buttons btn-connections active"></button>
                </div>
            </div>

            {/* User card */}
            <div className="container card-wrapper">
                {user.map((item, index) => {
                    return (
                        <>
                            <div key={index} className="card level-1 rectangle">
                                <img
                                    className="more-icon"
                                    src={item.img}
                                    alt="more icon"
                                />
                                <div className="card-avatar"></div>

                                <div className="card-content">
                                    <p className="name">{item.name}</p>
                                    <p className="card-profile">
                                        {item.profile}
                                    </p>
                                    <button className="btn-cart">
                                        <img
                                            src="src/assets/icons/cart.svg"
                                            alt="cart image"
                                        />
                                        {item.product}
                                    </button>
                                </div>
                                <div className="card-footer">
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <button type="button" className="add-card">
                                        <img
                                            src={item.add_img}
                                            alt="add card button"
                                        />
                                    </button>
                                </div>
                            </div>
                            <ol className="level-2-wrapper">
                                {item.children.map((item, index) => {
                                    return (
                                        <>
                                            <li>
                                                <div
                                                    key={index}
                                                    className="card level-2 rectangle"
                                                >
                                                    <button className="country-flag">
                                                        <img
                                                            src={
                                                                item.country_flag
                                                            }
                                                            alt="country flag"
                                                        />
                                                        {item.country}
                                                    </button>
                                                    <img
                                                        className="more-icon"
                                                        src={item.img}
                                                        alt="more icon"
                                                    />
                                                    <div className="card-avatar"></div>

                                                    <div className="card-content">
                                                        <p className="name">
                                                            {item.name}
                                                        </p>
                                                        <p className="card-profile">
                                                            {item.profile}
                                                        </p>
                                                        <button className="btn-cart">
                                                            <img
                                                                src="src/assets/icons/cart.svg"
                                                                alt="cart image"
                                                            />
                                                            {item.product}
                                                        </button>
                                                    </div>
                                                    <div className="card-footer">
                                                        <select>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                        <button
                                                            type="button"
                                                            className="add-card"
                                                        >
                                                            <img
                                                                src={
                                                                    item.add_img
                                                                }
                                                                alt="add card button"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                                <ol className="level-3-wrapper tree3">
                                                    {item.children.map(
                                                        (item, index) => {
                                                            return (
                                                                <>
                                                                    <li>
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="card level-3 rectangle"
                                                                        >
                                                                            <img
                                                                                className="more-icon"
                                                                                src={
                                                                                    item.img
                                                                                }
                                                                                alt="more icon"
                                                                            />
                                                                            <div className="card-avatar"></div>

                                                                            <div className="card-content">
                                                                                <p className="name">
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </p>
                                                                                <p className="card-profile">
                                                                                    {
                                                                                        item.profile
                                                                                    }
                                                                                </p>
                                                                                <button className="btn-cart">
                                                                                    <img
                                                                                        src="src/assets/icons/cart.svg"
                                                                                        alt="cart image"
                                                                                    />
                                                                                    {
                                                                                        item.product
                                                                                    }
                                                                                </button>
                                                                            </div>
                                                                            <div className="card-footer">
                                                                                <select>
                                                                                    <option>
                                                                                        1
                                                                                    </option>
                                                                                    <option>
                                                                                        2
                                                                                    </option>
                                                                                    <option>
                                                                                        3
                                                                                    </option>
                                                                                </select>
                                                                                <button
                                                                                    type="button"
                                                                                    className="add-card"
                                                                                >
                                                                                    <img
                                                                                        src={
                                                                                            item.add_img
                                                                                        }
                                                                                        alt="add card button"
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <ol className="level-4-wrapper tree4">
                                                                            {item.children.map(
                                                                                (
                                                                                    item,
                                                                                    index
                                                                                ) => {
                                                                                    return (
                                                                                        <>
                                                                                            <li>
                                                                                                <div
                                                                                                    key={
                                                                                                        index
                                                                                                    }
                                                                                                    className="card"
                                                                                                >
                                                                                                    <img
                                                                                                        className="more-icon"
                                                                                                        src={
                                                                                                            item.img
                                                                                                        }
                                                                                                        alt="more icon"
                                                                                                    />
                                                                                                    <div className="card-avatar"></div>

                                                                                                    <div className="card-content">
                                                                                                        <p className="name">
                                                                                                            {
                                                                                                                item.name
                                                                                                            }
                                                                                                        </p>
                                                                                                        <p className="card-profile">
                                                                                                            {
                                                                                                                item.profile
                                                                                                            }
                                                                                                        </p>
                                                                                                        <button className="btn-cart">
                                                                                                            <img
                                                                                                                src="src/assets/icons/cart.svg"
                                                                                                                alt="cart image"
                                                                                                            />
                                                                                                            {
                                                                                                                item.product
                                                                                                            }
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div className="card-footer">
                                                                                                        <select>
                                                                                                            <option>
                                                                                                                1
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                2
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                3
                                                                                                            </option>
                                                                                                        </select>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="add-card"
                                                                                                        >
                                                                                                            <img
                                                                                                                src={
                                                                                                                    item.add_img
                                                                                                                }
                                                                                                                alt="add card button"
                                                                                                            />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </li>
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            )}
                                                                        </ol>
                                                                    </li>
                                                                </>
                                                            )
                                                        }
                                                    )}
                                                </ol>
                                            </li>
                                        </>
                                    )
                                })}
                            </ol>
                        </>
                    )
                })}
            </div>

            {/* <div className="card-wrapper">
                {user.map((item, index) => {
                    return (
                        <>
                            <div key={index} className="card">
                                <button className="country-flag">
                                    <img
                                        src={item.country_flag}
                                        alt="country flag"
                                    />
                                    {item.country}
                                </button>
                                <img
                                    className="more-icon"
                                    src={item.img}
                                    alt="more icon"
                                />
                                <div className="card-avatar"></div>

                                <div className="card-content">
                                    <p className="name">{item.name}</p>
                                    <p className="card-profile">
                                        {item.profile}
                                    </p>
                                    <button className="btn-cart">
                                        <img
                                            src="src/assets/icons/cart.svg"
                                            alt="cart image"
                                        />
                                        {item.product}
                                    </button>
                                </div>
                                <div className="card-footer">
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <button type="button" className="add-card">
                                        <img
                                            src={item.add_img}
                                            alt="add card button"
                                        />
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div> */}
        </div>
    )
}

export default Main
