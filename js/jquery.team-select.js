(function($) {

    $.fn.teamSelect = function(fontSize) {

        var $options = [
            { agent_id: 1, agent_name: 'John Smith' },
            { agent_id: 2, agent_name: 'Anthony Riley' },
            { agent_id: 3, agent_name: 'Jacob Cattle' },
            { agent_id: 4, agent_name: 'Hawk Sally' },
            { agent_id: 5, agent_name: 'Sunset Valley' },
            { agent_id: 6, agent_name: 'Carey Bridger' },
            { agent_id: 7, agent_name: 'Anthony Riley' },
            { agent_id: 8, agent_name: 'Hawk Sally' },
            { agent_id: 9, agent_name: 'Ambar Rodriguez' },
            { agent_id: 10, agent_name: 'Viviana Musil' },
            { agent_id: 11, agent_name: 'Paula Bigi' },
            { agent_id: 12, agent_name: 'Javier Gerbasi' },
            { agent_id: 13, agent_name: 'Micaela Colella' },
            { agent_id: 14, agent_name: 'Hugo Viere' },
            { agent_id: 16, agent_name: 'Myriam Sanchez' },
            { agent_id: 17, agent_name: 'Rocio Lucero' },
            { agent_id: 18, agent_name: 'Renzo Antonnioli' },
            { agent_id: 19, agent_name: 'Maximiliano Beltriti' },
            { agent_id: 20, agent_name: 'Lionel Rodriguez' },
        ];


        // Hide native textarea
        this.hide();

        // Create custom markup
        this.each(function() {
            var $select = $(this);
            create_selects($select);
        });

        function create_selects($select) {

            var $teamLists = $('<div/>', { 'class': 'team-list' })
                .append(
                    $('<div></div>')
                    .addClass('team-select')
                    .addClass($select.attr('class') || '')
                    .addClass($select.attr('disabled') ? 'disabled' : '')
                    .html('<label  >Agents</label>  <ul class="listAgent"></ul>')
                )
                .append(
                    $('<div></div>')
                    .addClass('team-selected')
                    .addClass($select.attr('class') || '')
                    .addClass($select.attr('disabled') ? 'disabled' : '')
                    .html('<label>Real state team</label><ul class="listAgent"></ul>')
                );

            if (typeof fontSize !== 'undefined')
                $teamLists.css("font-size", fontSize + "px");

            $select.after($teamLists)



            var $dropdown = $select.next().children('.team-select');

            $.each($options, function(index, $option) {
                $dropdown.find('ul').append($('<li></li>')
                    .attr('data-value', $option.agent_id)
                    .attr('data-display', ($option.agent_name || null))
                    .addClass('plussign')
                    .addClass('option')
                    .html($option.agent_name)
                );

            });
        }

        /* Event listeners */
        $(document).off('.team_select');

        // Option click
        $(document).on('click.team_select', '.team-select .option:not(.disabled)', function(event) {

            var $option = $(this);
            var $dropdown = $option.closest('.team-select');
            var $selected = [];
            var $dropdownSelected = $option.closest('.team-list').children('.team-selected').children('ul');;

            $dropdown.find('.selected').removeClass('selected');
            $option.addClass('disabled');
            $dropdownSelected.append($option.clone().removeClass('disabled').removeClass('plussign').addClass('minussign'))

            $.each($dropdownSelected.children(), function(index, $selectedAgent) {
                if ($selected.indexOf($($selectedAgent).attr('data-value')))
                    $selected.push($($selectedAgent).attr('data-value'))
            });

            $dropdown.parent().prev().val($selected.join(',')).trigger('change');

        });


        $(document).on('click.team_selected', '.team-selected .option', function(event) {

            var $option = $(this);
            var $teamMember = $option.attr('data-value');
            var $dropdownSelected = $option.closest('.team-list').children('.team-selected').children('ul');;
            var $agent = $option.closest('.team-list').children('.team-select').children('ul')
                .find("[data-value='" + $teamMember + "']");
            var $textarea = $option.closest('.team-selected').parent().prev();
            var $selected = [];
            $agent.removeClass('disabled').addClass('selected');

            $.each($dropdownSelected.children(), function(index, $selectedAgents) {
                if ($($selectedAgents).attr('data-value') != $($option).attr('data-value'))
                    $selected.push($($selectedAgents).attr('data-value'))
            });

            $textarea.val($selected.join(',')).trigger('change');
            $option.remove();
        });

        return this;

    };

}(jQuery));