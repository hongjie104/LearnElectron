import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as CounterActions from '../../actions/counter';

// mapStateToProps是一个函数，返回值表示的是需要merge进props的state。默认值为() => ({})，即什么都不传
function mapStateToProps(state) {
	return {
		counter: state.counter
	};
}

//mapDispatchToProps是可以是一个函数，返回值表示的是需要merge进props的actionCreators
function mapDispatchToProps(dispatch) {
	return bindActionCreators(CounterActions, dispatch);
}

// connect就是将store中的必要数据作为props传递给React组件来render，并包装action creator用于在响应用户操作时dispatch一个action
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
