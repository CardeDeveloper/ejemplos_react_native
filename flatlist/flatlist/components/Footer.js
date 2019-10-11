import React, {Component, PropTypes} from 'react';
import PropTypes from 'prop-types'
import { Text, View, ActivityIndicator} from 'react-native';

class Footer extends Component{
    static propTypes = {
        hasMore: PropTypes.bool,
        isLoading: PropTypes.bool
    }
    
    static defaultProps = {
        hasMore: false,
        isLoading: false
    }



    render(){
        const {hasMore, isLoading} = this.props
        const title = hasMore ? 'Cargando..' : 'No hay mas elementos'

        return(
            <View>
                <ActivityIndicator style={{ }} animating={isLoading}/>
                <Text style = {{opacity: 0, marginLeft:8}}>{title}</Text>
            </View>
        );

    }
}

export default Footer;
