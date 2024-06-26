import Header from '~/components/Layout/components/Header';
import Sidebar from './SideBar';
import styles from '~/components/Layout/DefaultLayout/DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
