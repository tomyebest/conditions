# logic to recommend where to surf based on conditions

## location: Sunshine Coast (east facing)

- if winds are W, WNW, WSW && wave height is => 0.5m &&  =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Try the open beaches';
- if winds are NW, N or NNE && wave height is => 0.5m && =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Seek shelter at a backbeach';
- if winds are SW or SSW && wave height is => 0.5m && =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Find shelter at or up to 200m from a north-facing headland';

- if winds are W, WNW, WSW && wave height is > 1.5m &&  =< 2.5m && wave period is => 7 seconds && =< 12 seconds : RETURN 'Try the outer points (knowing your limitations)';
- if winds are NW, N or NNE && wave height is => 0.5m && =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Seek shelter at a backbeach';
- if winds are SW or SSW && wave height is => 0.5m && =< 1.5m && wave period is => 7 seconds && =< 10 seconds : RETURN 'Find shelter at or up to 200m from a north-facing headland';

