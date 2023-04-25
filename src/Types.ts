export interface InitialState {
    coins: HomePageCoin[]; // 코인 api 받아와서 정보 담을 배열
    coinsDetail : DetailCoin[]
}


// https://api.coinpaprika.com/v1/tickers?quotes=KRW -> 불러올 api

export interface HomePageCoin{ //InitialState에 담을 인터페이스
    id:string;  //아이디
    name:string; //코인 이름
    symbol:string; //기호 BTC , ETH , ETC
    rank: number;  // 순위
    max_supply:number; //최대 발행량
    quotes:{
        KRW:{
            price:number;
            market_cap:number;
            market_cap_change:number;
            percent_change_1h:number;
            percent_change_6h:number;
        }
    };
}
export interface DetailCoin{
    id:string;
    name:string;
    symbol:string;
    rank: number;
    circulating_supply:number;
    total_supply:number;
    max_supply:number;
    beta_value:number;
    first_data_at:number;
    last_updated:number;
    quotes:{
        KRW:{
            price:number;
            volume_24h:number;
            volume_24h_change_24h:number,
            market_cap:number;
            market_cap_change_24h:number;
            percent_change_15m:number;
            percent_change_30m:number;
            percent_change_1h:number;
            percent_change_6h:number;
            percent_change_12h:number;
            percent_change_24h:number;
            percent_change_7d:number;
            percent_change_30d:number;
            percent_change_1y:number;
            ath_price:number;
            percent_from_price_ath:number;
        }
    }
}


//////////
//회원가입 폼 데이터 인터페이스
export interface signFormData{
    errors:{
        email:{
            message:string;
        }
        password:{
            message:string;
        }
        confirmPassword:{
            message:string;
        }
        name:{
            message:string;
        }
        fm:{
            message:string;
        }
    };
    email:string;
    password:string;
    confirmPassword:string;
    name:string;
    fm:string;
    
}

export interface loginFormData{
    errors:{
        email :{ message:string; }
        password :{ message:string; }    
    }
    email:string;
    password:string;

}

export interface userInfo {
    email:string |undefined;
    name: string |undefined;
    fm: string |undefined
}

