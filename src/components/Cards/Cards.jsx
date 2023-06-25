import { USERS } from '../../data'

const Cards = () => {
    return (
        <div className="container card-wrapper">
            {USERS.map((user, index) => {
                return (
                    <>
                        <div
                            key={index}
                            className="card tree-level-1 tree-wrapper"
                        >
                            <img
                                className="more-icon"
                                src={user.img}
                                alt="more icon"
                            />
                            <div className="card-avatar">
                                <img src={user.profile_img} alt={user.name} />
                            </div>

                            <div className="card-content">
                                <p className="name">{user.name}</p>
                                <p className="card-profile">{user.profile}</p>
                                <button className="btn-cart">
                                    <img
                                        src="src/assets/icons/cart.svg"
                                        alt="cart image"
                                    />
                                    {user.product}
                                </button>
                            </div>
                            <div className="card-footer">
                                {user.select ? (
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                ) : (
                                    ''
                                )}

                                <button type="button" className="add-card">
                                    <img
                                        src={user.add_img}
                                        alt="add card button"
                                    />
                                </button>
                            </div>
                        </div>
                        <ol className="tree-level-2-wrapper">
                            {user.children.map((user, index) => {
                                return (
                                    <>
                                        <li>
                                            <div
                                                key={index}
                                                className="card tree-level-2 tree-wrapper"
                                            >
                                                <button className="country-flag">
                                                    <img
                                                        src={user.country_flag}
                                                        alt="country flag"
                                                    />
                                                    {user.country}
                                                </button>
                                                <img
                                                    className="more-icon"
                                                    src={user.img}
                                                    alt="more icon"
                                                />
                                                <div className="card-avatar">
                                                    <img
                                                        src={user.profile_img}
                                                        alt={user.name}
                                                    />
                                                </div>

                                                <div className="card-content">
                                                    <p className="name">
                                                        {user.name}
                                                    </p>
                                                    <p className="card-profile">
                                                        {user.profile}
                                                    </p>
                                                    <button className="btn-cart">
                                                        <img
                                                            src="src/assets/icons/cart.svg"
                                                            alt="cart image"
                                                        />
                                                        {user.product}
                                                    </button>
                                                </div>
                                                <div className="card-footer">
                                                    {user.select ? (
                                                        <select>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                    ) : (
                                                        ''
                                                    )}
                                                    <button
                                                        type="button"
                                                        className="add-card"
                                                    >
                                                        <img
                                                            src={user.add_img}
                                                            alt="add card button"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <ol className="tree-level-3-wrapper tree3">
                                                {user.children.map(
                                                    (user, index) => {
                                                        return (
                                                            <>
                                                                <li>
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="card tree-level-3 tree-wrapper"
                                                                    >
                                                                        <img
                                                                            className="more-icon"
                                                                            src={
                                                                                user.img
                                                                            }
                                                                            alt="more icon"
                                                                        />
                                                                        <div className="card-avatar">
                                                                            <img
                                                                                src={
                                                                                    user.profile_img
                                                                                }
                                                                                alt={
                                                                                    user.name
                                                                                }
                                                                            />
                                                                        </div>

                                                                        <div className="card-content">
                                                                            <p className="name">
                                                                                {
                                                                                    user.name
                                                                                }
                                                                            </p>
                                                                            <p className="card-profile">
                                                                                {
                                                                                    user.profile
                                                                                }
                                                                            </p>
                                                                            <button className="btn-cart">
                                                                                <img
                                                                                    src="src/assets/icons/cart.svg"
                                                                                    alt="cart image"
                                                                                />
                                                                                {
                                                                                    user.product
                                                                                }
                                                                            </button>
                                                                        </div>
                                                                        <div className="card-footer">
                                                                            {user.select ? (
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
                                                                            ) : (
                                                                                ''
                                                                            )}
                                                                            <button
                                                                                type="button"
                                                                                className="add-card"
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        user.add_img
                                                                                    }
                                                                                    alt="add card button"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <ol className="tree-level-4-wrapper tree4">
                                                                        {user.children.map(
                                                                            (
                                                                                user,
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
                                                                                                        user.img
                                                                                                    }
                                                                                                    alt="more icon"
                                                                                                />
                                                                                                <div className="card-avatar">
                                                                                                    <img
                                                                                                        src={
                                                                                                            user.profile_img
                                                                                                        }
                                                                                                        alt={
                                                                                                            user.name
                                                                                                        }
                                                                                                    />
                                                                                                </div>

                                                                                                <div className="card-content">
                                                                                                    <p className="name">
                                                                                                        {
                                                                                                            user.name
                                                                                                        }
                                                                                                    </p>
                                                                                                    <p className="card-profile">
                                                                                                        {
                                                                                                            user.profile
                                                                                                        }
                                                                                                    </p>
                                                                                                    <button className="btn-cart">
                                                                                                        <img
                                                                                                            src="src/assets/icons/cart.svg"
                                                                                                            alt="cart image"
                                                                                                        />
                                                                                                        {
                                                                                                            user.product
                                                                                                        }
                                                                                                    </button>
                                                                                                </div>
                                                                                                <div className="card-footer">
                                                                                                    {user.select ? (
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
                                                                                                    ) : (
                                                                                                        ''
                                                                                                    )}
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="add-card"
                                                                                                    >
                                                                                                        <img
                                                                                                            src={
                                                                                                                user.add_img
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
    )
}

export default Cards
