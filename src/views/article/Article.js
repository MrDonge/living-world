import React, { Component } from 'react'

import TopBar from '../../components/header/Topbar';
import Scroll from '../../components/scroll/Scroll';

import './article.scss'
export default class Article extends Component {

    /**
     * 监听滚动实现上划显示标题到顶部导航
     * @param {scroll} scroll 滚动位置
     */
    scroll(scroll) {
        // 如果上划
        if (scroll.y < 0) {

        }
    }
    render() {
        return (
            <div className="article-container">
                <TopBar title="文章详情" showBack={true} onLeft={() => this.props.history.goBack()} />
                <div className="article-view">
                    <Scroll onScroll={this.scroll}>
                        <div>
                            <div className="article-title">
                                <div className="title">what does you think so ?</div>
                            </div>
                            <div className="article-content">
                                while done in asl left iit but i like it and i'm was very like him, so i did it when the weekly,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whein asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whewhile done in asl left iit but i like it and i'm was very like him, so i did it when the weekly,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whein asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whewhile done in asl left iit but i like it and i'm was very like him, so i did it when the weekly,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whein asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whewhile done in asl left iit but i like it and i'm was very like him, so i did it when the weekly,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whein asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whewhile done in asl left iit but i like it and i'm was very like him, so i did it when the weekly,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whein asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whe,
                                in asl left iit but i like it and i'm was very like him, so i did it whe
                            </div>
                        </div>
                    </Scroll>
                </div>
            </div>
        )
    }
}
