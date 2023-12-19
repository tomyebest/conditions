# logic to recommend where to surf based on conditions

## location: Sunshine Coast (east facing)

### if wind speed is > 5 knots

- if winds are W or WNW or WSW && wave height is => 0.5m &&  =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Try the open beaches';
- if winds are NW or N or NNE && wave height is => 0.5m && =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Seek shelter at a backbeach';
- if winds are SW or SSW && wave height is => 0.5m && =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Find shelter at or up to 200m from a north-facing headland';

- if winds are W or WNW or WSW or NW or SW or SSW && wave height is > 1.5m &&  =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'Try the outer points (knowing your limitations)';
- if winds are N or NNE or NE or ENE or E && wave height is > 1.5m && =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'It's probably not worth it';
- if winds are S or SSE or SE or ESE && wave height is > 1.5m && =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'Head to a pointbreak. Exercise patience and the utmost etiquette';

- if wave height is > 0.5m && wave period is =< 6 seconds : RETURN 'It looks like a windswell in the water. Go check out your local but keep expectations low'; 
- if wave period is > 12 seconds: RETURN 'It looks like a solid groundswell in the water. Check out the surf report and know your limitations';

- if wave height =< 0.5m : RETURN 'There doesn't seem to be much surf around. It wouldn't hurt to suss your local beachie, though';

### if wind speed is <= 5 knots

- if wave height is => 0.5m &&  =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Try the open beaches';
- if wave height is > 1.5m && =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'It's probably pumping on the open beaches. Check the tides & know your limitations. The outer points are also worth consideration';


### if wave height is < 2.5m 

- if wave height is < 2.5m : RETURN 'Experienced surfers only.'; 
